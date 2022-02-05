import React from "react";
import { useSelector } from "react-redux";
import { Results } from "../Results";

export const ResultsPage = () => {
  const { searchResults } = useSelector((state) => state.api);
  /* console.log(test); */
  /* const { searchResults } = useSelector((state) => state.apiData); */
  /*   console.log(searchResults); */
  return <Results data={searchResults} />;
  /* return <div>Hola</div>; */
};
