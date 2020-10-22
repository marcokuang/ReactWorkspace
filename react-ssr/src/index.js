// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;
import "babel-polyfill";
import proxy from "express-http-proxy";
import express from "express";
import { matchRoutes } from "react-router-config";
import routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { render } from "react-dom";
import { connect } from "react-redux";

const app = express();
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator: (opts) => {
      opts.headers["X-Forwarded-Host"] = "localhost:3000";
      return opts;
    },
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  // logic to initialize the store and pass to the renderer
  // check the path in the request router and determine what components are needed as dependencies from the routes config object.
  // console.log(matchRoutes(routes, req.path));

  // the loaddata function from the react route config object attached to the path will be executed
  const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    // wrap the promise in another promise. Promise.all method will then see all the outter promise as resolved even something wrong happened
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // after the store is fully configured, pass to the renderer to render the html contents
  const renderContent = () => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  };

  Promise.all(promises).then(renderContent);
});

app.listen(3000, () => {
  console.log("server is using port 3000");
});
