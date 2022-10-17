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






            /* <h2 id="menu">Meny</h2>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Forretter</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <ol>
                                <li>Vårrull 2stk <span>gl, so</span></li>
                                <li>Kyllingsuppe med mais <span>gl, se, e</span></li>
                                <li>Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></li>
                                <li>Sprøstekte kongereker <span>gl, se, e</span></li>
                                <li>Vegetar vårrull 2stk <span>gl, so</span></li>
                                <li>Reke chips <span>sd</span></li>
                            </ol>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Biff</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <ol start="9">
                                <li>Biff i rød karri og kokosmelk saus()HOT <span>gl, sd, pn</span></li>
                                <li>Biff chop suey <span>gl, se, so</span></li>
                                <li>Biff med bambusskudd i oystersaus <span>gl, se, so</span></li>
                                <li>Biff i svart peppersaus <span>gl, se, so</span></li>
                                <li>Biff i grønn karri<span>gl, se</span></li>
                                <li>Biff i hvitløk chilisaus(HOT)<span>gl, se</span></li>
                                <li>Pandas biff(EKSTRA HOT)<span>gl, se, so</span></li>
                            </ol>
                        </div>
                        <div className="menu__price menu__text">
                            <p className="blank">-</p>
                            <p>159kr</p>
                            <p>159kr</p>
                            <p>-</p>
                            <p>159kr</p>
                            <p>159kr</p>
                            <p>159kr</p>
                            <p>159kr</p>
                            <p>159kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Kylling</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Svinekjøtt</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Kongereker</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>And</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Stekt Ris</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Stekte Nudler</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Grillmeny</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Gourmetretter</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Barnemeny</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu__card">
                <div className="menu__card-container">
                    <h3>Extra</h3>
                    <div className="menu__card-item-container">
                        <div className="menu__item menu__text">
                            <p>1. Vårrull 2stk <span>gl, so</span></p>
                            <p>2. Kyllingsuppe med mais <span>gl, se, e</span></p>
                            <p>3. Beijingsuppe(HOT) <span>gl, so, se, e, sd</span></p>
                            <p>4. Sprøstekte kongereker <span>gl, se, e</span></p>
                            <p>5. Vegetar vårrull 2stk <span>gl, so</span></p>
                            <p>6. Reke chips <span>sd</span></p>
                        </div>
                        <div className="menu__price menu__text">
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>59kr</p>
                            <p>75kr</p>
                            <p>59kr</p>
                            <p>35kr</p>
                        </div>
                    </div>
                </div>
            </div> */
