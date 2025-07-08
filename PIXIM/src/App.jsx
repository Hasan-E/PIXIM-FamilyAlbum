import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./app/store";
import AppRouter from "./router/AppRouter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4C7EFF",
      },
      secondary: {
        main: "#6C5FD2",
        light: "#FBA1B7",
      },
      background: {
        default: "#F5F5F5",
      },
    },
    typography: {
      fontFamily: `"Nunito", "Helvetica", "Arial", sans-serif`,
    },
  });

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
