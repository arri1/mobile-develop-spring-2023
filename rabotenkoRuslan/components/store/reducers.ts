import { INCREMENT, DECREMENT, CounterActionTypes, CounterState } from './types';

const initialState: CounterState = {
  count: 0,
};

export default function counterReducer(state = initialState, action: CounterActionTypes): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}