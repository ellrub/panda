import React from "react"

import "../App.scss"
import "../index.css"
import "./Categories.scss"

const Categories = ({categories, filterItems, activeCategory}) => {
    return (
        <div id="menu" className="categories__filter-btn--container">
            {categories.map((category, index) => {
                return (
                    
                    <button
                        type="button"
                        className={`${
                            activeCategory === category ? "filter-btn active" : "filter-btn"
                        }`}
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;