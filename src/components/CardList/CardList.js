import React from 'react';

import CardItem from "../CardItem/CardItem";

const CardList = (props) => {

    const handleSelect = (event) => {

        props.selectedValue.selected = event.target.value;
        props.setSelectedValue(props.selectedValue);

        props.handleSort(props.selectedValue.selected);
    }



    return (
        <div className="card-list">
            <div className="card-list__header">
                <h3 className="card-list__title">Added products</h3>
                <div className="card-list__sort-wrap">
                    <p className="card-list__sort-text">Sort by</p>
                    <select className="card-list__sort" defaultValue="checked" onChange={handleSelect}>
                        <option className="card-list__sort-option" value="date">Date</option>
                        <option className="card-list__sort-option" value="alphabet">Alphabet</option>
                        <option className="card-list__sort-option" value="checked">Checked</option>
                    </select>
                </div>
            </div>
            {
                props.products.map(
                    (product, index) => (
                        <CardItem
                            errorValue={props.errorValue}
                            handleError={props.handleError}
                            removeProduct={props.removeProduct}
                            handleSaveNewProductInfo={props.handleSaveNewProductInfo}
                            handleSort={props.handleSort}
                            key={index}
                            product={product}
                        />
                    ))
            }
        </div>
    )
}

export default CardList;