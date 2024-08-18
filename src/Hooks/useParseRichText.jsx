import { Link } from "@mui/material";
import parse, { Element, attributesToProps } from "html-react-parser";
const parseOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      if (domNode.name === "a") {
        return (
          <Link color="green" {...attributesToProps(domNode.attribs)}>
            {domNode.children.map((child) => {
              const textChild = child;
              return textChild.data;
            })}
          </Link>
        );
      }
    }
  },
};

export const useParseRichText = () => {
  const parseRichText = (text) => {
    const addedNewLines = text.replace(/\n/g, "<br />");
    return parse(addedNewLines, parseOptions);
  };

  return { parseRichText };
};
