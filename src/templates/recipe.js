import React from "react";

import { Content, HTMLContent } from "../cms/common/Content";
import { isReactElement } from "../utils/dom";
import { Soup } from "../components/Icons/Soup";
import { Row } from "../components/NoSemantic/Row";
import {
  Header,
  HeaderContent,
  Ingredients,
  Ingredient,
  Title,
  Country,
  Category,
  Flag,
  FigureStep,
  Step,
  Footer,
  CatImg,
} from "../styles/recipe";

export const Recipe = ({
  name,
  image,
  category,
  ingredients,
  content,
  steps,
  country,
  catImg,
  bonAppetit,
}) => {
  const Body = isReactElement(content) ? Content : HTMLContent;
  console.info("--> steps ggwp 4444", steps, country);
  return (
    <React.Fragment>
      <Row>
        <Header image={image}>
          <Country>
            <Flag src="https://restcountries.eu/data/ukr.svg" />
            Украина
          </Country>
          <HeaderContent>
            <hr />
            <Title>{name}</Title>
            <Category>
              <Soup /> {category}
            </Category>
          </HeaderContent>
        </Header>
        {ingredients && (
          <Ingredients>
            {ingredients.map((ingredient, index) => (
              <Ingredient key={`${ingredient}-${index + 1}`}>{ingredient}</Ingredient>
            ))}
          </Ingredients>
        )}
        <Body content={content} />
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
        <FigureStep>
          <Step aria-label="Шаг 1">Варим бульон</Step>
          <img
            src="https://cdn.lifehacker.ru/wp-content/uploads/2014/12/shutterstock_233452513-630x420.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos facilis hic
            iusto nam officia qui ratione rerum sequi. Architecto distinctio enim praesentium rem
            sunt temporibus veniam voluptate voluptates. Cupiditate.
          </p>
        </FigureStep>
        <FigureStep>
          <Step aria-label="Шаг 2">Варим бульон</Step>
          <img
            src="https://cdn.lifehacker.ru/wp-content/uploads/2014/12/shutterstock_233452513-630x420.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos facilis hic
            iusto nam officia qui ratione rerum sequi. Architecto distinctio enim praesentium rem
            sunt temporibus veniam voluptate voluptates. Cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos facilis hic
            iusto nam officia qui ratione rerum sequi. Architecto distinctio enim praesentium rem
            sunt temporibus veniam voluptate voluptates. Cupiditate.
          </p>
        </FigureStep>
      </Row>
      <Footer>
        <CatImg src={catImg} alt="cat" />
        <em>{bonAppetit}</em>
      </Footer>
    </React.Fragment>
  );
};
