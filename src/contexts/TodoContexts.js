import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1, 
        todo: "todo Msg",
        completed: false,

    }],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplte : (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider