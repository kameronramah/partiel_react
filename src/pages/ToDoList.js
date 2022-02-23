import React, { useState } from 'react';

function ToDoList() {

    const [items, setItems] = useState([]); 
    const [newItem, setNewItem] = useState('');
    const [id, setId] = useState(0);

    const addToList = (e) => {
        e.preventDefault();
        setItems(items => [...items, {id: id, item: newItem, status: 0}])
        setId(id => id+=1);
    }

    const changeStatus = (index) => e => {
        let newData = [...items];
        newData[index] = {...newData[index], status: e.target.checked} ;
        setItems(newData);
    }

    let myList = [];
        
    for (const item of items) {
        myList.push(
            <div key={item.id}>
                <input name={item.id} type="checkbox" checked={item.status} onChange={changeStatus(item.id)}/> 
                {item.status ? <strike> <label>{item.item}</label> </strike> : <label>{item.item}</label> } 
            </div>
        )
    }

    return (
        <div>
           <h1>Liste de courses</h1>
           {myList}
           <br/>
           <form onSubmit={addToList}>
               <label> Ajouter un nouvel item à la liste : </label>
               <br/>
               <textarea value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
               <br/>
               <br/>
               <input type="submit" value="Ajouter"/>
           </form>
        </div>
    )
}

export default ToDoList;