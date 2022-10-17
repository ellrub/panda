import React, {useState} from 'react';

import {Header, Menu} from "./container";
import {Navbar, Categories} from "./components";
import "./App.scss";
import items from "./components/data"

const allCategories = ["alle", ...new Set(items.map((item) => item.category))];

const App = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "alle") {
        setMenuItems(items);
        return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
};

    return (
    <div className='app'>
        <Header />
        <Navbar />
        <Categories 
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
        />
        <Menu items={menuItems} />
    </div>
    );
}

export default App;