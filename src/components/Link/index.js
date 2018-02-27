import React from "react";
import { Wrapper, Icon } from "./styled";

const Link = ({ name, url }) => (
  <Wrapper href={url} target="_blank">
    <Icon className={`fa fa-${name}`} />
  </Wrapper>
);

export default Link;
