import React, { Component } from "react";

import { FoodAdditiveHeader } from "../components/FoodAdditive/Header";
import { Row } from "../components/NoSemantic/Row";
import foodAdditive from "../assets/data/foodAdditive";
import humanBody from "../assets/img/backgrounds/human-body-tissues-organs.jpg";
import { Table } from "../styles/food-additive";

class FoodAdditive extends Component {
  render() {
    return (
      <>
        <FoodAdditiveHeader background={humanBody} />
        <Row>
          <Table
            data={foodAdditive}
            head={[
              "№",
              "Уровень опасности",
              "Полное название",
              "Тип",
              "Используются в",
              "Влияние на организм",
              "Запрещен в странах",
            ]}
            cell={[64, 164, 174, 200, 240, 284, 184]}
          />
        </Row>
      </>
    );
  }
}

export default FoodAdditive;
