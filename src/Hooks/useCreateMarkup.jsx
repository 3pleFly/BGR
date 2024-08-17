export const useCreateMarkup = () => {
  const createMarkup = (text) => {
    const formattedText = text ? text.replace(/\n/g, "<br />") : "";
    return { __html: formattedText };
  };

  return { createMarkup };
};
