import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* jeśli używasz redux */}
      <Provider store={store}>
        {/* dla 09, dla 08 bez tylko query.... */}
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
