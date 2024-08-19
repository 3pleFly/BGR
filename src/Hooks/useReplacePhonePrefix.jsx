export const useReplacePhonePrefix = () => {
  const replace = (str) => {
    return `${str?.replace("+", "")}+`;
  };

  return { replace };
};
