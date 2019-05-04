import React from "react";

import { Recipe } from "../../templates/recipe";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";

const RecipePreview = ({ entry, widgetFor }) => {
  return (
    <PreviewContainer>
      <Recipe
        country={entry.getIn(["data", "country"])}
        name={entry.getIn(["data", "name"])}
        image={entry.getIn(["data", "image"])}
        category={entry.getIn(["data", "category"])}
        ingredients={entry.getIn(["data", "ingredients"])}
        content={widgetFor("body")}
        steps={entry.getIn(["data", "steps"]).toJS()}
        catImg="https://cs.pikabu.ru/images/big_size_comm/2013-10_5/13825363169036.png"
        bonAppetit="Смачного!"
      />
    </PreviewContainer>
  );
};

export default RecipePreview;
