import { INCREMENT_COUNTER, DECREMENT_COUNTER, CounterActionTypes } from './types';

export function incrementCounter(): CounterActionTypes {
  return { type: INCREMENT_COUNTER };
}

export function decrementCounter(): CounterActionTypes {
  return { type: DECREMENT_COUNTER };
}