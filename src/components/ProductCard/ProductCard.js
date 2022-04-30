import React from 'react';

import CheckedButton from "../CheckedButton/CheckedButton";
import Success from "../../images/Success";
import Delete from "../../images/Delete";
import Edit from "../../images/Edit";

const ProductCard = (props) => {

    return (
        <div className="product-card">
            {
                props.product.image && <img className="product-card__image" src={URL.createObjectURL(props.product.image)} alt="product" />
            }
            <div className="product-card__info-wrap">
                <p className="product-card__number">{props.product.number}</p>
                <h3 className="product-card__title">{props.product.title}</h3>
                <div className="product-card__buttons-wrap">
                    {
                        !props.product.checked &&
                        <>
                            <button className="button button--action button--change-button" onClick={props.handleCardChange}><Edit className="button__icon"/></button>
                            <button className="button button--action button--delete-button" onClick={() => {
                                props.removeProduct(props.product.id)
                            }}><Delete className="button__icon" /></button>
                        </>
                    }
                    <CheckedButton isChecked={props.isChecked} check={props.handleProductChecked} product={props.product}>{props.product.checked ? <><Success className="success-button__icon" />Checked</> : 'Check' }</CheckedButton>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;