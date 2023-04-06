import { INCREMENT_COUNTER, DECREMENT_COUNTER, CounterActionTypes, CounterState } from './types';

const initialState: CounterState = {
  count: 0,
};

export default function counterReducer(state = initialState, action: CounterActionTypes): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { count: state.count - 1 };
    default:
      return state;
  }
}