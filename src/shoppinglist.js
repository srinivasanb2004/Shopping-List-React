import { useState } from "react";
import './styles.css'; 

const ShoppingList = () => {

    const [mylist, setmylist] = useState(["Apple", "Banana", "Orange", "Carrot"]);
    const [items, setitems] = useState("");

    const handlechange = (e) => {
        setitems(e.target.value);
    }

    const handleAdd = () => {
        setmylist([...mylist, items.trim()]);
        setitems("");
    }

    return (
        <div className="shopping-list-container">
            <h1>Shopping List</h1>
            <input
                placeholder="Write here to add items"
                value={items}
                onChange={handlechange}
            />

            <button onClick={handleAdd}>ADD</button>


            <ul>
                {mylist.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
