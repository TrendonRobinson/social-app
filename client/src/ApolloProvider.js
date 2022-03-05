import React from "react";
import App from "./App";
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const httpLink = createHttpLink({
    uri: "http://localhost:5000",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);
