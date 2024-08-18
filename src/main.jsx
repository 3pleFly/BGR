import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import store from "./Redux/rootReducer";
import { theme } from "./Theme/theme.js";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { TranslationProvider } from "./Providers/TranslationProvider/index.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <TranslationProvider>
          <CssBaseline />
          <Provider store={store}>
            <App />
          </Provider>
        </TranslationProvider>
      </HelmetProvider>
    </ThemeProvider>
  </BrowserRouter>
);
