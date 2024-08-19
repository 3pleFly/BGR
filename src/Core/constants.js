export const AppRoutes = {
  ROOT: "/",
  CONTACT: "/contact",
  ACCESSIBILITY: "/accessibility",
  PROFILE: `/profile`,
};

export const ApiUris = {
  TRANSLATION_AND_DATA: "/assets/json/data.json",
};

export const Environment = {
  MAP_LATITUDE: import.meta.env.VITE_GOOGLE_MAP_LAT,
  MAP_LONGITUDE: import.meta.env.VITE_GOOGLE_MAP_LONG,
  MAP_API_KEY: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  EMAILJS_KEY: import.meta.env.VITE_EMAILJS_KEY,
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};
