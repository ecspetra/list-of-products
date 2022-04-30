import React, {useState} from 'react';

import EditProductCard from "../EditProductCard/EditProductCard";
import ProductCard from "../ProductCard/ProductCard";

import classNames from "classnames";

const CardItem = (props) => {

    const [isChecked, setProductChecked] = useState({
        isProductChecked: false
    });

    const handleProductChecked = () => {
        setProductChecked(prevState => ({isProductChecked: !prevState.isProductChecked}));
        props.product.checked = !props.product.checked;
        props.handleSort();
    }

    const [isChanged, setProductChanged] = useState({
        isChangeSelected: false
    });

    const handleCardChange = () => {
        setProductChanged(prevState => ({isChangeSelected: !prevState.isChangeSelected}));
    }

    const cardItemClassNames = classNames('card-item', {
        'card-item--checked' : props.product.checked
    });

    return (
        <div className={cardItemClassNames}>
            {
                isChanged.isChangeSelected
                    ? <EditProductCard errorValue={props.errorValue} handleError={props.handleError} product={props.product} handleSaveNewProductInfo={props.handleSaveNewProductInfo} handleProductChecked={handleProductChecked} handleCardChange={handleCardChange} />
                    : <ProductCard removeProduct={props.removeProduct} product={props.product} isChecked={isChecked} handleProductChecked={handleProductChecked} handleCardChange={handleCardChange} />
            }
        </div>
    )
}

export default CardItem;