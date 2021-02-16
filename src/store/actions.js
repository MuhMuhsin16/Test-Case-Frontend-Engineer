import { GET_TODOS, TODOS_ERROR, ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";
import axios from 'axios'

export const getTodos = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`)
        dispatch( {
            type: GET_TODOS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: TODOS_ERROR,
            payload: console.log(e),
        })
    }

}
// let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: "",
    title : content,
    description : "Test",
    status : 0,
    createdAt : new Date() 
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});


export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
  });

export const updateTodo = data => ({
  type: UPDATE_TODO,
  payload: data
});




  

