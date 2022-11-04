import React from "react"

import "./Menu.scss"


const Menu = ({items}) => {
    return (
        <>
            <main>
                {items.map((item) => {
                    const {id, type, 
                        title1, alergy1, price1,
                        title2, alergy2, price2,
                        title3, alergy3, price3,
                        title4, alergy4, price4,
                        title5, alergy5, price5,
                        title6, alergy6, price6,                               
                        title9, alergy9, price9,                               
                        title10, alergy10, price10,                               
                        title11, alergy11, price11,                               
                        title12, alergy12, price12,                               
                        title13, alergy13, price13,                               
                        title14, alergy14, price14,                               
                        title15, alergy15, price15,                               
                        title23, alergy23, price23,                               
                        title24, alergy24, price24,                               
                        title25, alergy25, price25,                               
                        title26, alergy26, price26,                               
                        title27, alergy27, price27,                               
                        title28, alergy28, price28,                               
                        title29, alergy29, price29,                               
                        title30, alergy30, price30,                               
                        title31, alergy31, price31,                               
                        title36, alergy36, price36,                               
                        title37, alergy37, price37,                               
                        title38, alergy38, price38,                               
                        title45, alergy45, price45,                               
                        title46, alergy46, price46,                               
                        title47, alergy47, price47,                               
                        title48, alergy48, price48,                               
                        title49, alergy49, price49,                               
                        title66, alergy66, price66,                               
                        title67, alergy67, price67,                               
                        title70, alergy70, price70,                               
                        title71, alergy71, price71,                               
                        title72, alergy72, price72,                               
                        title73, alergy73, price73,                               
                        title74, alergy74, price74,                               
                        title75, alergy75, price75,                               
                        title77, alergy77, price77,                               
                        title78, alergy78, price78,                               
                        title79, alergy79, price79,                               
                        title80, alergy80, price80,                               
                        title90, alergy90, price90,                               
                        title91, alergy91, price91,                               
                        title92, alergy92, price92,                               
                        title93, alergy93, price93,                               
                        title100, alergy100, price100,                               
                        title101, alergy101, price101,                               
                        title102, alergy102, price102,                               
                        
                    } = item;
                    return (
                        <article key={id}>
                                <h2 className="menu__text-type">{type}</h2>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title1}</h3>
                                    <h3 className="menu__text">{price1}</h3>
                                </div>
                                <p className="menu__alergy">{alergy1}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title2}</h3>
                                    <h3 className="menu__text">{price2}</h3>
                                </div>
                                <p className="menu__alergy">{alergy2}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title3}</h3>
                                    <h3 className="menu__text">{price3}</h3>
                                </div>
                                <p className="menu__alergy">{alergy3}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title4}</h3>
                                    <h3 className="menu__text">{price4}</h3>
                                </div>
                                <p className="menu__alergy">{alergy4}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title5}</h3>
                                    <h3 className="menu__text">{price5}</h3>
                                </div>
                                <p className="menu__alergy">{alergy5}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title6}</h3>
                                    <h3 className="menu__text">{price6}</h3>
                                </div>
                                <p className="menu__alergy">{alergy6}</p>
                            
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title9}</h3>
                                    <h3 className="menu__text">{price9}</h3>
                                </div>
                                <p className="menu__alergy">{alergy9}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title10}</h3>
                                    <h3 className="menu__text">{price10}</h3>
                                </div>
                                <p className="menu__alergy">{alergy10}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title11}</h3>
                                    <h3 className="menu__text">{price11}</h3>
                                </div>
                                <p className="menu__alergy">{alergy11}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title12}</h3>
                                    <h3 className="menu__text">{price12}</h3>
                                </div>
                                <p className="menu__alergy">{alergy12}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title13}</h3>
                                    <h3 className="menu__text">{price13}</h3>
                                </div>
                                <p className="menu__alergy">{alergy13}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title14}</h3>
                                    <h3 className="menu__text">{price14}</h3>
                                </div>
                                <p className="menu__alergy">{alergy14}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title15}</h3>
                                    <h3 className="menu__text">{price15}</h3>
                                </div>
                                <p className="menu__alergy">{alergy15}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title23}</h3>
                                    <h3 className="menu__text">{price23}</h3>
                                </div>
                                <p className="menu__alergy">{alergy23}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title24}</h3>
                                    <h3 className="menu__text">{price24}</h3>
                                </div>
                                <p className="menu__alergy">{alergy24}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title25}</h3>
                                    <h3 className="menu__text">{price25}</h3>
                                </div>
                                <p className="menu__alergy">{alergy25}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title26}</h3>
                                    <h3 className="menu__text">{price26}</h3>
                                </div>
                                <p className="menu__alergy">{alergy26}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title27}</h3>
                                    <h3 className="menu__text">{price27}</h3>
                                </div>
                                <p className="menu__alergy">{alergy27}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title28}</h3>
                                    <h3 className="menu__text">{price28}</h3>
                                </div>
                                <p className="menu__alergy">{alergy28}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title29}</h3>
                                    <h3 className="menu__text">{price29}</h3>
                                </div>
                                <p className="menu__alergy">{alergy29}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title30}</h3>
                                    <h3 className="menu__text">{price30}</h3>
                                </div>
                                <p className="menu__alergy">{alergy30}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title31}</h3>
                                    <h3 className="menu__text">{price31}</h3>
                                </div>
                                <p className="menu__alergy">{alergy31}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title36}</h3>
                                    <h3 className="menu__text">{price36}</h3>
                                </div>
                                <p className="menu__alergy">{alergy36}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title37}</h3>
                                    <h3 className="menu__text">{price37}</h3>
                                </div>
                                <p className="menu__alergy">{alergy37}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title38}</h3>
                                    <h3 className="menu__text">{price38}</h3>
                                </div>
                                <p className="menu__alergy">{alergy38}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title45}</h3>
                                    <h3 className="menu__text">{price45}</h3>
                                </div>
                                <p className="menu__alergy">{alergy45}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title46}</h3>
                                    <h3 className="menu__text">{price46}</h3>
                                </div>
                                <p className="menu__alergy">{alergy46}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title47}</h3>
                                    <h3 className="menu__text">{price47}</h3>
                                </div>
                                <p className="menu__alergy">{alergy47}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title48}</h3>
                                    <h3 className="menu__text">{price48}</h3>
                                </div>
                                <p className="menu__alergy">{alergy48}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title49}</h3>
                                    <h3 className="menu__text">{price49}</h3>
                                </div>
                                <p className="menu__alergy">{alergy49}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title66}</h3>
                                    <h3 className="menu__text">{price66}</h3>
                                </div>
                                <p className="menu__alergy">{alergy66}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title67}</h3>
                                    <h3 className="menu__text">{price67}</h3>
                                </div>
                                <p className="menu__alergy">{alergy67}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title70}</h3>
                                    <h3 className="menu__text">{price70}</h3>
                                </div>
                                <p className="menu__alergy">{alergy70}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title71}</h3>
                                    <h3 className="menu__text">{price71}</h3>
                                </div>
                                <p className="menu__alergy">{alergy71}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title72}</h3>
                                    <h3 className="menu__text">{price72}</h3>
                                </div>
                                <p className="menu__alergy">{alergy72}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title73}</h3>
                                    <h3 className="menu__text">{price73}</h3>
                                </div>
                                <p className="menu__alergy">{alergy73}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title74}</h3>
                                    <h3 className="menu__text">{price74}</h3>
                                </div>
                                <p className="menu__alergy">{alergy74}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title75}</h3>
                                    <h3 className="menu__text">{price75}</h3>
                                </div>
                                <p className="menu__alergy">{alergy75}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title77}</h3>
                                    <h3 className="menu__text">{price77}</h3>
                                </div>
                                <p className="menu__alergy">{alergy77}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title78}</h3>
                                    <h3 className="menu__text">{price78}</h3>
                                </div>
                                <p className="menu__alergy">{alergy78}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title79}</h3>
                                    <h3 className="menu__text">{price79}</h3>
                                </div>
                                <p className="menu__alergy">{alergy79}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title80}</h3>
                                    <h3 className="menu__text">{price80}</h3>
                                </div>
                                <p className="menu__alergy">{alergy80}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title90}</h3>
                                    <h3 className="menu__text">{price90}</h3>
                                </div>
                                <p className="menu__alergy">{alergy90}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title91}</h3>
                                    <h3 className="menu__text">{price91}</h3>
                                </div>
                                <p className="menu__alergy">{alergy91}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title92}</h3>
                                    <h3 className="menu__text">{price92}</h3>
                                </div>
                                <p className="menu__alergy">{alergy92}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title93}</h3>
                                    <h3 className="menu__text">{price93}</h3>
                                </div>
                                <p className="menu__alergy">{alergy93}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title100}</h3>
                                    <h3 className="menu__text">{price100}</h3>
                                </div>
                                <p className="menu__alergy">{alergy100}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title101}</h3>
                                    <h3 className="menu__text">{price101}</h3>
                                </div>
                                <p className="menu__alergy">{alergy101}</p>
                                <div className="menu__text-container">
                                    <h3 className="menu__text">{title102}</h3>
                                    <h3 className="menu__text">{price102}</h3>
                                </div>
                                <p className="menu__alergy">{alergy102}</p>
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