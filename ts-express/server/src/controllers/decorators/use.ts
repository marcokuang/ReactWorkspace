import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    // pull the existing middlesware from the metadata
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
