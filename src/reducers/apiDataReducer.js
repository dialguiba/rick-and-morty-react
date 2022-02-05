import { types } from "../redux-types";

const initialState = {
  searchResults: [],
};

export const apiDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.apiSaveSearchResults:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
