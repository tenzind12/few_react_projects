import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { FaIgloo } from "react-icons/fa";

// LOCALSTORAGE GETITEM FUNCTION
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  else return [];
};

// COMPONENT BODY
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please enter something", "danger");
    } else if (name && isEditing) {
      //When editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "value changed", "success");
    } else {
      showAlert(true, "Item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  // SHOWALERT FUNCTION WITH DEFAULT ARGUMENTS
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show: show, type, msg });
  };

  // CLEARLIST FUNCTION FOR THE CLEARALL
  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  // REMOVE SINGLE ITEM
  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setList(list.filter((item) => item.id !== id)); //returns items not matching id
  };

  // EDIT ITEM
  const editItem = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(itemToEdit.title);
  };

  // LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // console.log(localStorage.getItem("list"));

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
