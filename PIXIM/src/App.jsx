import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import AppRouter from "./router/AppRouter";
import { PersistGate } from "redux-persist/integration/react";

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
        <PersistGate persistor={persistor} loading={null}>
          <AppRouter />
        </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
