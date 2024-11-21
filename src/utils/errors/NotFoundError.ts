import { HttpError, HttpErrorOptions } from "./HttpError";

export class NotFoundError extends HttpError {
  constructor(message: string, options: HttpErrorOptions = {}) {
    super(message, options);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
