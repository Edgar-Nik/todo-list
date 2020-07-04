import React from "react";
import "./item-filter.css"

const ItemFilter = () => {
    return (
        <div className="filter-buttons">
            <button type="button"
                    className="filter-button">All</button>
            <button type="button"
                    className="filter-button">Active</button>
            <button type="button"
                    className="filter-button">Done</button>
        </div>
    )
}
export default ItemFilter;