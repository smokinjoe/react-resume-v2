import { HttpError, HttpErrorOptions } from "./HttpError";

export class BadRequestError extends HttpError {
  constructor(message: string, options: HttpErrorOptions = {}) {
    super(message, options);
    this.name = "BadRequestError";
    this.statusCode = 400;
  }
}
