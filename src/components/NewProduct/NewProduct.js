import React, { useState } from 'react';
import classNames from "classnames";
import Image from "../../images/Image";
import Error from "../Error/Error";

const NewProduct = (props) => {

    const [NewProductTitle, setNewProductTitle] = useState('');

    const [NewProductQuantity, setNewProductQuantity] = useState('');

    const [NewProductImage, setNewProductImage] = useState(null);

    const imageFieldClassNames = classNames('new-product__label new-product__label--file', {
        'new-product__label--file-uploaded' : NewProductImage
    });

    const setNewTitle = (event) => {
        setNewProductTitle(event.target.value);
    }

    const setNewNumber = (event) => {
        setNewProductQuantity(event.target.value);
    }

    const setNewImage = (event) => {
        setNewProductImage(event.target.files[0]);
    }

    const generateNewID = () => {

        let newID;

        if (props.products.length !== 0) {
            const lastProduct = props.products[props.products.length - 1];
            newID = lastProduct.id + 1;
        } else {
            newID = 1;
        }

        return newID;
    }

    const newProductInfo = {
        id: generateNewID(),
        title: NewProductTitle,
        number: Number(NewProductQuantity),
        checked: false,
        image: NewProductImage,
    }

    const onFormSubmitHandler = (event) => {
        event.preventDefault();
        if ((NewProductTitle && NewProductQuantity) && (isFinite(NewProductQuantity))) {
            props.addNewProduct(newProductInfo);
            setNewProductTitle('');
            setNewProductQuantity('');
            props.handleError({ newProductError: '' });
        } else {
            props.handleError({ newProductError: 'Please enter correct data' });
        }
    }

    return (
        <form className="new-product" onSubmit={onFormSubmitHandler}>
            <h3 className="new-product__headline">
                Add new product to list
            </h3>
            <div className="new-product__form">
                <div className="new-product__row">
                    <div className="field-wrap new-product__field-wrap">
                        <label htmlFor="product_name" className="label new-product__label">Product name</label>
                        <input id="product_name" className="input-field new-product__field" value={NewProductTitle}
                               type="text" onChange={setNewTitle}/>
                    </div>
                    <div className="field-wrap new-product__field-wrap">
                        <label htmlFor="product_number" className="label new-product__label">Product quantity</label>
                        <input id="product_number" className="input-field new-product__field" value={NewProductQuantity} type="text" onChange={setNewNumber}/>
                    </div>
                </div>
                <label className={imageFieldClassNames} onChange={setNewImage}>
                    {
                        NewProductImage
                            ? <div className="new-product__file">
                                <Image className="product-image-icon"/>
                                {NewProductImage.name}
                                <input className="new-product__field" type="file" id="product_image" name="product_image" accept="image/*" />
                              </div>
                            : <input className="new-product__field" type="file" id="product_image" name="product_image" accept="image/*" />
                    }
                </label>
                {
                    props.errorValue.newProductError.length ? <Error errorValue={props.errorValue}>{props.errorValue.newProductError}</Error> : null
                }
                <button className="button" type="submit">Add product</button>
            </div>
        </form>
    )
}

export default NewProduct;