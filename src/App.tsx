import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import { client } from "./lib/apollo";

import { Router } from "./Router";

import "@vime/core/themes/default.css";
import "@vime/core/themes/light.css";

import "./styles/global.css";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}
