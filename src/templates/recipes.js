import React from "react";

import catUA from "../assets/cats/ua.png";
import countries from "../assets/data/countries";
import { Content, HTMLContent } from "../cms/common/Content";
import { isReactElement } from "../utils/dom";
import { Soup } from "../components/Icons/Soup";
import { Row } from "../components/NoSemantic/Row";
import { Share } from "../components/Share";
import { RecipeStep } from "../components/RecipeStep";
import {
  Header,
  HeaderContent,
  Ingredients,
  Ingredient,
  Title,
  Country,
  Category,
  Flag,
  Footer,
  CatImg,
  BonAppetit,
} from "../styles/recipe";

export const Recipes = ({
  country: countryName,
  name,
  image,
  category,
  content,
  ingredients,
  steps,
  twitterHandle,
  url,
  link,
}) => {
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
          steps.map(({ title, step }, index) => (
            <RecipeStep
              key={`${title}-${index + 1}`}
              title={title}
              content={step}
              stepNumber={index + 1}
            />
          ))}
      </Row>
      <Footer>
        <Share twitterHandle={twitterHandle} url={`${url}${link}`} title={name} />
        <BonAppetit>
          <em>{`${(country && country.bonAppetit) || "Смачного"}!`}</em>
          <CatImg src={(country && country.catImg) || catUA} alt="cat" />
        </BonAppetit>
      </Footer>
    </>
  );
};

export default ({ pageContext }, ...props) => <Recipes {...props} {...pageContext} />;
