// initial state value
const initialTodos = [
    {
        id: 1,
        todo: 'Learn Reducers',
        complete: false
    }
]

// action need to pass in order to complete the todo with id=1
const action = {
    type: 'DO_TODO',
    payload: {
        id: 1
    }
}

const todoReducer = (todos, action) => {
    const { type, payload } = action
    switch (type) {
        case 'DO_TODO':
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...todo, complete: true }
                } else {
                    return todo
                }
            })

        case 'UNDO_TODO':
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...todo, complete: false }
                } else {
                    return todo
                }
            })

        default:
            return todos
    }
}

// reducer function will return a new state value 
// based on the initial state and the action
const todos = todoReducer(intialTodos, action)
