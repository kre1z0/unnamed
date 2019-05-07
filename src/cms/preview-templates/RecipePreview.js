import React from "react";

import { Recipes } from "../../templates/recipes";
import { PreviewContainer } from "../../components/CmsPreviewContainer/CmsPreviewContainer";

const RecipePreview = ({ entry, widgetFor }) => (
  <PreviewContainer>
    <Recipes
      country={entry.getIn(["data", "country"])}
      name={entry.getIn(["data", "name"])}
      image={entry.getIn(["data", "image"])}
      category={entry.getIn(["data", "category"])}
      ingredients={entry.getIn(["data", "ingredients"])}
      content={widgetFor("body")}
      steps={entry.getIn(["data", "steps"]).toJS()}
    />
  </PreviewContainer>
);
export default RecipePreview;
