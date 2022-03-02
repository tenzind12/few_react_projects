import { useState } from "react";


const Form = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    const [alert, setAlert] = useState(false);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(!todo) setAlert(true);
        else {
            addTodo(todo);
            setTodo('');
        };
    }

    return (
        <>
            {alert && <p style={{color:'red'}}>Please enter a value</p>}
            <form onSubmit={handleAddTodo}>
                <input 
                    type="text" 
                    placeholder="Ajouter une tâche" 
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button>Ajouter</button>
            </form>
        </>
    )
}

export default Form;