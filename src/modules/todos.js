import React from 'react';

//액션타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
let nextId = 0;
//액션 생성 함수
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id:nextId++,
        done: false,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})
//초기상태를 지정
const initialState = [
    // {
    //     id: 1, 
    //     text: '예시',
    //     done: false
    // },
   
]
export default function todos(state = initialState, action) {
    switch (action.type){
        case TOGGLE_TODO:
            return state.map(
                todo => 
                todo.id === action.id //id가 일치아느냐??
                ? { ...todo, done: !todo.done }
                : todo //아닐때는 값을 그대로둠
            )
        case ADD_TODO : 
            return state.concat(action.todo)
        default: 
         return state;
        
    }
}