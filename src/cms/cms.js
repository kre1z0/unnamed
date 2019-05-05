import CMS from "netlify-cms";

import CountrySelect from "./Widgets/CountrySelect";
import CountrySelectPreview from "./Widgets/CountrySelect/CountrySelectPreview";
import RecipePreview from "./preview-templates/RecipePreview";

CMS.registerWidget("country-select", CountrySelect, CountrySelectPreview);
CMS.registerPreviewTemplate("recipes", RecipePreview);
