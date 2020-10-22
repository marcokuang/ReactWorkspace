import React from "react";

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true;
  // console.log(staticContext);
  return (
    <div>
      <h1>Oops, router not found</h1>
    </div>
  );
}
export default {
  component: NotFoundPage,
};
