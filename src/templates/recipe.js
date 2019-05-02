import React from "react";

import { Row } from "../components/NoSemantic/Row";
import {
  Header,
  HeaderContent,
  Ingredients,
  Ingredient,
  Title,
  Category,
  Step,
} from "../styles/recipe";

export const Recipe = ({ name, image, сategory, ingredients }) => {
  return (
    <>
      <Row>
        <Header image={image}>
          <HeaderContent>
            <hr />
            <Title>{name}</Title>
            <Category>#{сategory}</Category>
          </HeaderContent>
        </Header>
        {ingredients && (
          <Ingredients>
            {ingredients.map((ingredient, index) => (
              <Ingredient key={`${ingredient}-${index + 1}`}>{ingredient}</Ingredient>
            ))}
          </Ingredients>
        )}
        <h2>Ингредиенты</h2>
        <p>
          <em>Для бульона:</em>
        </p>
        <ul>
          <li>вода — 1,5–2 л.;</li>
          <li>свинина или говядина на кости — 400 г.</li>
        </ul>
        <p>
          <em>Для зажарки:</em>
        </p>
        <ul>
          <li>свёкла — 2 шт. (небольшие);</li>
          <li>морковь — 1 шт.;</li>
          <li>лук — 3 шт. (средние);</li>
          <li>томатная паста — 2 ст. л.;</li>
          <li>подсолнечное масло — 4–5 ст. л.;</li>
          <li>лимонная кислота — щепотка.</li>
        </ul>
        <p>
          <em>Для борща:</em>
        </p>
        <ul>
          <li>капуста белокочанная свежая — 300 г;</li>
          <li>картофель — 4 шт. (средние);</li>
          <li>соль, лавровый лист, зелень — по вкусу.</li>
        </ul>
        <p>
          <em>Для подачи:</em>
        </p>
        <ul>
          <li>сметана — 1 ст. л. (в каждую тарелку);</li>
          <li>зелень.</li>
        </ul>
        <Step aria-label="Шаг 1">Варим бульон</Step>
        <img
          src="https://cdn.lifehacker.ru/wp-content/uploads/2014/12/shutterstock_233452513-630x420.jpg"
          alt=""
        />
      </Row>
    </>
  );
};
