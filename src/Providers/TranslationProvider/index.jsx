import { TranslationContext } from "../../Context/TranslationContext";
import { useState, useEffect } from "react";
import { ApiUris } from "../../Core/constants";

export const TranslationProvider = ({ children }) => {
  const [translation, setTranslation] = useState(null);

  useEffect(() => {
    fetch(ApiUris.TRANSLATION_AND_DATA)
      .then((response) => response.json())
      .then((jsonData) => setTranslation(jsonData));
  }, []);

  return (
    <TranslationContext.Provider value={translation}>
      {translation ? children : null}
    </TranslationContext.Provider>
  );
};
