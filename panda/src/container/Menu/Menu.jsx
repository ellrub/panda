import React from "react"

import "./Menu.scss"

const Menu = ({items}) => {
    return (
        <main>
            {items.map((item) => {
                const {id, title, alergy, price} = item;
                return (
                    <article key={id}>
                        <div>
                            <div>
                                <h3>{title}</h3>
                                <h3>{price}</h3>
                            </div>
                            <p>{alergy}</p>
                        </div>
                    </article>
                )
            })}

        </main>
    )
}

export default Menu;