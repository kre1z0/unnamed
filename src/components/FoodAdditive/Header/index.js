import React from "react";

import {
  Header,
  E,
  Ul,
  Li,
  Allergens,
  Blood,
  Asthma,
  Liver,
  Digestion,
  Intestines,
} from "./styled";

export const FoodAdditiveHeader = ({ background }) => {
  return (
    <Header background={background}>
      <Ul>
        <Li>
          Неправильное разватие плода <E>E233</E>
        </Li>
        <Li>
          Приводят к заболеваниям кожи <E>E230</E> — <E>E230</E>
        </Li>
      </Ul>
      <Allergens>
        Аллергены <E>E131</E> <E>E132</E> <E>E160</E> <E>E210</E> <E>E214</E> <E>E217</E>{" "}
        <E>E230</E> <E>E231</E> <E>E232</E> <E>E239</E> <E>E311</E> — <E>E313</E>
      </Allergens>
      <Blood>
        Влияет на уровень холестирина в крови <E>E320</E>
      </Blood>
      <Asthma>
        Нежелательно асматикам <E>E102</E> <E>E107</E> <E>E122</E> — <E>E124</E> <E>E155</E>{" "}
        <E>E211</E> — <E>E214</E> <E>E217</E> <E>E211</E> — <E>E227</E>
      </Asthma>
      <Liver>
        Влияет на печень и почки <E>E171</E> — <E>E173</E> <E>E220</E> <E>E302</E> <E>E320</E> —{" "}
        <E>E322</E> <E>E510</E> <E>E518</E>
      </Liver>
      <Digestion>
        Расстройство пищевариения <E>E338</E> — <E>E341</E> <E>E407</E> <E>E450</E> <E>E461</E>{" "}
        <E>E463</E> <E>E465</E> <E>E466</E>
      </Digestion>
      <Intestines>
        Расстройство кишечника <E>E220</E> — <E>E224</E>
      </Intestines>
    </Header>
  );
};
