import { HttpError } from "./HttpError";
import { BadRequestError } from "./BadRequestError";
import { NotFoundError } from "./NotFoundError";

export const errorMap = new Map<number, typeof HttpError>([
  [400, BadRequestError],
  [404, NotFoundError],
  [500, HttpError],
]);
