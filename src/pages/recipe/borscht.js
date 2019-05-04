import React from "react";

import { Recipe } from "../../templates/recipe";

const Borscht = () => {
  return (
    <React.Fragment>
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
        catImg="https://cs.pikabu.ru/images/big_size_comm/2013-10_5/13825363169036.png"
        bonAppetit="Смачного!"
      />
    </React.Fragment>
  );
};

export default Borscht;
