import React from 'react';

//01. 액션 타입 만들기
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//02. 액션 생성 함수 만들기
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

//03. 초기상태를 선언
const initialState = {
    number: 0,
    diff: 1
}

//04.리듀서 선언
export default function counter(state=initialState, action) {
    switch (action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            }
        default:
            return state;
    }
}