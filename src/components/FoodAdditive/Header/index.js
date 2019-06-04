import React from "react";

import {
  Header,
  RightSide,
  E,
  Ul,
  Li,
  Allergens,
  Blood,
  Asthma,
  Liver,
  Digestion,
  Intestines,
  SubTitle,
  RightSideParagraph,
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
      <RightSide>
        <h2>Список особо опасных пищевых Е-добавок</h2>
        <SubTitle>Рост злокачественных опухолей:</SubTitle>
        <RightSideParagraph>
          Е103, Е105, Е121, Е123, Е125, Е126, Е130, Е131, Е143, Е152, Е210, Е211, Е213, Е214, Е215,
          Е216, Е217, Е240, Е330, Е447
        </RightSideParagraph>
        <SubTitle>Заболевания желудочно-кишечного тракта:</SubTitle>
        <RightSideParagraph>
          Е221, Е222, Е223, Е224, Е225, Е226, Е320, Е321, Е322, Е338, Е339, Е340, Е341, Е407, Е450,
          Е461, Е462, Е463, Е464, Е465, Е466
        </RightSideParagraph>
        <SubTitle>Аллергены:</SubTitle>
        <RightSideParagraph>Е230, Е231, Е232, Е239, Е311, Е312, Е313</RightSideParagraph>
        <SubTitle>Болезни печени и почек:</SubTitle>
        <RightSideParagraph>Е171, Е173, Е320, Е321, Е322</RightSideParagraph>
      </RightSide>
    </Header>
  );
};
