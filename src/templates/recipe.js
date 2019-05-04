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
  country,
  name,
  image,
  category,
  ingredients,
  content,
  steps,
  catImg = "https://cs.pikabu.ru/images/big_size_comm/2013-10_5/13825363169036.png",
  bonAppetit = "Смачного!",
}) => {
  const Body = isReactElement(content) ? Content : HTMLContent;
  console.info("--> recipe country ggwp 4444", country);
  return (
    <>
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
        {steps &&
          steps.map(({ title, step }, index) => {
            const StepContent = isReactElement(step) ? Content : HTMLContent;

            return (
              <FigureStep key={`${title}-${index + 1}`}>
                {title && <Step aria-label={`Шаг ${index + 1}`}>{title}</Step>}
                <StepContent content={step} />
              </FigureStep>
            );
          })}
      </Row>
      <Footer>
        <CatImg src={catImg} alt="cat" />
        <em>{bonAppetit}</em>
      </Footer>
    </>
  );
};
