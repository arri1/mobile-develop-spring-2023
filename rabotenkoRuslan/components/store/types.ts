export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER  = 'DECREMENT_COUNTER ';

export interface CounterState {
  count: number;
}

interface IncrementAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementAction {
  type: typeof DECREMENT_COUNTER;
}

export type CounterActionTypes = IncrementAction | DecrementAction;