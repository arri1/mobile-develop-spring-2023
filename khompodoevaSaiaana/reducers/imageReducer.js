const initialState = {
    image: null,
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PICK_IMAGE':
        return {
          ...state,
          image: action.payload,
        };
      case 'CLEAR_IMAGE':
        return {
          ...state,
          image: null,
        };
      default:
        return state;
    }
  };
  
  export default imageReducer;  