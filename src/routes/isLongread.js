import split from "lodash/split";

export const isLongread = pathname => {
  const path = split(pathname, "/", 2)[1];

  if (path === "recipe") {
    return true;
  } else {
    return false;
  }
};
