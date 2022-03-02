const List = ({todos, deleteList, check}) => {

    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={index}>
                        <i onClick={() => check(todo.id)} className={'far fa-2x '+(todo.done ? 'fa-check-square' : 'fa-square')}></i>
                        <span>{todo.description}</span>
                        <button onClick={() => deleteList(index)}><i className="fas fa-trash fa-2x"></i></button>
                    </li>
                )
            })}
        </ul>
    )
}

export default List