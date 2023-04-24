export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

export const addFavorite = task => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: task,
    })
}

  export const removeFavorite = task => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: task,
    })
}