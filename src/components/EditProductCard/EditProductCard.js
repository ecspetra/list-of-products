import React, {useState} from 'react';
import classNames from "classnames";
import Image from "../../images/Image";
import Error from "../Error/Error";

const EditProductCard = (props) => {


    const [ChangedProductTitle, setChangedProductTitle] = useState({
        value: props.product.title
    });

    const [ChangedProductQuantity, setChangedProductQuantity] = useState({
        value: props.product.number
    });

    const [ChangedProductImage, setChangedProductImage] = useState(props.product.image);

    const changedProductTitle = (event) => {
        setChangedProductTitle({value: event.target.value});
    }

    const changedProductQuantity = (event) => {
        setChangedProductQuantity({value: event.target.value});
    }

    const changedProductImage = (event) => {
        setChangedProductImage(event.target.files[0]);
    }

    const imageEditFieldClassNames = classNames('edit-product-card__label edit-product-card__label--file', {
        'edit-product-card__label--file-uploaded' : ChangedProductImage
    });

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        const changedProduct = {
            id: props.product.id,
            title: ChangedProductTitle.value,
            number: Number(ChangedProductQuantity.value),
            checked: props.product.checked,
            image: ChangedProductImage,
        }

        if ((!!changedProduct.title) && (!!changedProduct.number)) {
            props.handleSaveNewProductInfo(changedProduct);
            props.handleCardChange();
            props.handleError({ changeProductError: '' });
        } else {
            props.handleError({ changeProductError: 'Please enter correct data' });
        }
    }

    return (
        <form className="edit-product-card" onSubmit={onFormSubmitHandler}>
            <div className="edit-product-card__form">
                <div className="edit-product-card__row">
                    <div className="field-wrap edit-product-card__field-wrap">
                        <label htmlFor="edit_product_name" className="label edit-product-card__label">Product name</label>
                        <input value={ChangedProductTitle.value} id="edit_product_name" className="input-field edit-product-card__field" type="text" onChange={changedProductTitle} />
                    </div>
                    <div className="field-wrap edit-product-card__field-wrap">
                        <label htmlFor="edit_product_number" className="label edit-product-card__label">Product quantity</label>
                        <input value={ChangedProductQuantity.value} id="edit_product_number" className="input-field edit-product-card__field" type="text" onChange={changedProductQuantity} />
                    </div>
                </div>
                <label className={imageEditFieldClassNames} onChange={changedProductImage}>
                    {
                        ChangedProductImage
                            ? <div className="edit-product-card__file">
                                <Image className="product-image-icon"/>
                                {ChangedProductImage.name}
                                <input className="edit-product-card__field" type="file" id="product_image" name="product_image" accept="image/*" />
                              </div>
                            : <input className="edit-product-card__field" type="file" id="product_image" name="product_image" accept="image/*" />
                    }
                </label>
                {
                    props.errorValue.changeProductError.length ? <Error errorValue={props.errorValue}>{props.errorValue.changeProductError}</Error> : null
                }
                <button className="button button--save" type="submit">Save</button>
            </div>
        </form>
    )
}

export default EditProductCard;