import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actionTypes'


const initialState = {
    todos: [],
    loading: true
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_TODOS:
            action.payload.forEach(element => {
                element.createdAt = new Date(element.createdAt)
            });
            return {
                ...state,
                todos: action.payload,
                loading: false

            }


        case ADD_TODO: {
            let id = state.todos[(state.todos.length - 1 )].id;
            action.payload.id = ++id          
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }

        case DELETE_TODO:{
            let index = state.todos.map(x => {
                return x.id;
              }).indexOf(action.payload.id);
              state.todos.splice(index, 1)
              return {
                ...state,
                todos: [...state.todos],
            };
        }

        case UPDATE_TODO:{
            debugger
            return {    
                ...state,    
                todos: state.todos.map(    
                    (content, i) => content.id === action.payload.id ? {...content, title : action.payload.title }    
                                            : content)    
            };  
        }


        default: return state
    }

}