import _ from "lodash";
import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchData } from "../../actions/apiData";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(searchData(event.target.value));
  };

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter email" onChange={_.debounce(handleSearchChange, 1000)} />
    </Form.Group>
  );
};
