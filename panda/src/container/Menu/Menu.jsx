import React from "react"

import "./Menu.scss"

const Menu = ({items}) => {
    return (
        <>
            <main>
                {items.map((item) => {
                    const {id, title, alergy, price, type} = item;
                    return (
                        <article key={id}>
                                <h2 className="menu__text-type">{type}</h2>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title}</h3>
                                    <h3 className="menu__text">{price}</h3>
                                </div>
                                <p className="menu__alergy">{alergy}</p>
                                <div className="menu__underline-container">
                                    <div className="menu__underline"></div>
                                </div>
                        </article>
                    )
                })}

            </main>
                <div className="menu__info">
                    <p>Alle våre kyllingretter kan også fås med vegetar kylling</p>
                    <h3>Alergener</h3>
                    <p>GL - Gluten | SO - Soya | SE - Sesam | PN - Peanøtt | E - Egg | N - Nøtter</p>
                    <p>Vi kan også lage de fleste retter glutenfri</p>
                </div>
                <div className="space">

                </div>
        </>
    )
}

export default Menu;