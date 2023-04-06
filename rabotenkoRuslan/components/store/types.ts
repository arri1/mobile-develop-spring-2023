export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface CounterState {
  count: number;
}

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;