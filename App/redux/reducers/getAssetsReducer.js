import * as actions from '../action_types';

const initState = {
  assets: [],
  fovorites: [],
  loading: false,
  message: '',
};

const getAssetsReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.Get_ASSETS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.Get_ASSETS_SUCCESS:
      return {
        ...state,
        assets: action.data,
        message: action.message,
        loading: false,
      };
    case actions.Get_ASSETS_FAILED:
      return {
        ...state,
        assets: [],
        message: action.message,
        loading: false,
      };
    case actions.HANDLE_ASSETS_FAVORITES:
      let favorites = action.assets.filter(item => item?.isFavorite);
      return {
        ...state,
        assets: action.assets,
        favorites,
      };
    default:
      return state;
  }
};

export default getAssetsReducer;
