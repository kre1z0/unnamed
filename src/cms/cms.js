import CMS from "netlify-cms";

import { CountrySelect } from "./Widgets/CountrySelect";
import RecipePreview from "./preview-templates/RecipePreview";

CMS.registerWidget("country-select", CountrySelect);
CMS.registerPreviewTemplate("recipes", RecipePreview);
