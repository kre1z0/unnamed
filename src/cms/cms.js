import CMS from "netlify-cms";
import { CountrySelectControl } from "netlify-cms-widget-country-select";

import RecipePreview from "./preview-templates/RecipePreview";

CMS.registerWidget("country-select", CountrySelectControl);
CMS.registerPreviewTemplate("recipes", RecipePreview);
