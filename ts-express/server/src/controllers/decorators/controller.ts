import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { Request, Response, NextFunction, RequestHandler } from "express";

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("Invalid request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("Invalid request");
        return;
      }
    }

    next();
  };
}

// decorator factory which take route prefix as an argument
export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    // loop the target class' prototype and find any metadata of "path"
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);
      // if a path is defined in the metadata, which means @get decorator is used,
      // we hook up the path with the express router

      if (path) {
        console.log(
          ">>>",
          path,
          method,
          `middlewares.length: ${middlewares.length}`
        );
        router[method](
          `${routePrefix}${path}`,
          validator,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
