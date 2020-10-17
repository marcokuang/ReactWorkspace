import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// HTML characters and JavaScript line terminators are escaped automatically.
// You can pass an optional unsafe argument to serialize() for straight serialization.
import serialze from "serialize-javascript";
import Routes from "../client/Routes";

// the req path contains the url
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  // the current state redux store will be sent to the client side
  return `
    <html>
      <head>
      </head>
      <body style="background-color:#555; color:azure">
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_STATE = ${serialze(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>`;
};
