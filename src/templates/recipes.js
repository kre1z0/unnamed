import React from "react";

import catUA from "../assets/cats/ua.png";
import patternUA from "../assets/patterns/ua.png";
import countries from "../assets/data/countries";
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

export const Recipes = ({ country: countryName, name, image, category, content, ingredients, steps }) => {
  const Body = isReactElement(content) ? Content : HTMLContent;
  const country = countries.find(item => item.name === countryName);

  return (
    <>
      <Row>
        <Header image={image}>
          <Country>
            {country && <Flag src={country.flag} alt="flag" />}
            {country && country.name}
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
      <Footer image={(country && country.pattern) || patternUA}>
        <CatImg src={(country && country.catImg) || catUA} alt="cat" />
        <em>{`${(country && country.bonAppetit) || "Смачного"}!`}</em>
      </Footer>
    </>
  );
};

export default ({ pageContext }, ...props) => <Recipes {...props} {...pageContext} />;
