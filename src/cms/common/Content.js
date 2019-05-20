import React from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

export const Content = React.forwardRef(({ Element, content, ...props }, ref) =>
  Element ? (
    <Element ref={ref} {...props}>
      {content}
    </Element>
  ) : (
    <div ref={ref} {...props}>
      {content}
    </div>
  ),
);

export const HTMLContent = React.forwardRef(({ Element, content, ...props }, ref) =>
  Element ? (
    <Element
      ref={ref}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
      {...props}
    />
  ) : (
    <div ref={ref} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} {...props} />
  ),
);
