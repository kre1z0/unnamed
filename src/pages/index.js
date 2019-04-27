import React from "react";
import PropTypes from "prop-types";

import { Map } from "../components/Map";

const Index = () => {
  return <Map />;
};

Index.propTypes = {
  component: PropTypes.bool,
};

export default Index;
