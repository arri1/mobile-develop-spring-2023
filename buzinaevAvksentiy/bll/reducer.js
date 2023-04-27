const SET_CURRENT_NUMBER = 'SET_CURRENT_NUMBER'

const initialState = {
    currentNumber: '1'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_NUMBER:
        return { ...state, currentNumber:action.currentNumber }
      default:
        return state
    }
  }

export const setCurrentNumber = currentNumber => ({type:SET_CURRENT_NUMBER , currentNumber})