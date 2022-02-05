import { types } from "../redux-types";
import { rick_and_morty_api } from "../utils/axios";

export const searchData = (res) => {
  return async (dispatch) => {
    const searchResults = (await rick_and_morty_api.get(`/character/?name=${res}`)).data.results;
    dispatch(saveSearchResults(searchResults));
  };
};

export const saveSearchResults = (searchResults) => ({
  type: types.apiSaveSearchResults,
  payload: searchResults,
});
