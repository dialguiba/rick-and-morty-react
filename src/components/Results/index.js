import React from "react";
import { MyCard } from "../MyCard";

export const Results = ({ data }) => {
  const propsToSend = (res) => ({
    name: res.name,
    image: res.image,
    status: res.status,
  });
  return <div class="row">{React.Children.toArray(data.map((res) => <MyCard {...propsToSend(res)} />))}</div>;
};
