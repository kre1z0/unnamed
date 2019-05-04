import React from "react";
import { StyleSheetManager } from "styled-components";

export default function StyledSheets({ children }) {
  const iframe = document.getElementsByTagName("iframe")[0];
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return <StyleSheetManager target={iframeHeadElem}>{children}</StyleSheetManager>;
}
