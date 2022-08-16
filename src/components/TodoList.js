import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList(props) {

    const [todos, setTodos] = useState([])

    const addTOdo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(newTodos)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>What's the Plan for today</h1>
            <TodoForm onSubmit={addTOdo()}/>
            <Todo
                todos = {todos}
                completeTodo = {completeTodo}
            />
        </div>
    );
}

export default TodoList;