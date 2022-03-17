import React from "react";
import App from "./App";
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { BrowserRouter } from "react-router-dom";

const httpLink = createHttpLink({
    uri: "http://localhost:5000",
});

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});



export default (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);
