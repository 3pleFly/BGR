import parse from "html-react-parser";

export const useParseRichText = () => {
  const parseRichText = (text) => {
    const addedNewLines = text.replace(/\n/g, "<br />");
    return parse(addedNewLines);
  };

  return { parseRichText };
};
