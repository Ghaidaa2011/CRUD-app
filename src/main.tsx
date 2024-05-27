import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
