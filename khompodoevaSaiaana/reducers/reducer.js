const initialState = {
  pokemonNumber: 1000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_POKEMON':
      return {
        ...state,
        pokemonNumber: state.pokemonNumber < 1008 ? state.pokemonNumber + 1 : 1,
      };
    case 'BACK_POKEMON':
      return {
        ...state,
        pokemonNumber: state.pokemonNumber > 1 ? state.pokemonNumber - 1 : 1008,
      };
    default:
      return state;
  }
};

export default reducer;
