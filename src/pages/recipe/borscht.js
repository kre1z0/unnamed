import React from "react";

import { Recipe } from "../../templates/recipe";

const Borscht = () => {
  return (
    <>
      <Recipe
        name="Классический борщ"
        image="https://www.santamariaworld.com/optimized/recipe-small/globalassets/russia/101160_shut.png"
        ingredients={[
          "мясо",
          "свёкла",
          "морковь",
          "лук",
          "томатная паста",
          "подсолнечное масло",
          "лимонная кислота",
          "капуста",
          "сметана",
          "зелень",
          "лавровый лист",
        ]}
        category="Первые блюда"
      />
    </>
  );
};

export default Borscht;
