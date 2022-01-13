import React from 'react';
import Counter from '../components/Counter';
//액션생성함수를 불러오기
import { increase, decrease, setDiff } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';
function CounterContainer() {
    //useSelector를 리덕스 스토어의 상태를 조회하는 hook
    const { number, diff } = useSelector(state=>({
        number: state.counter.number,
        diff: state.counter.diff
    }));
    
    //useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할수 있게 해주는 hook
    const dispatch = useDispatch();
    //각 액션을 디스패치 하는 함수
    const onSetDiff = diff => dispatch(setDiff(diff));
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return (
        <Counter 
        //상태
        number={number}
        diff={diff}
        //액션을 디스패치하는 함수들
        onSetDiff={onSetDiff}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        />
    );
}

export default CounterContainer;