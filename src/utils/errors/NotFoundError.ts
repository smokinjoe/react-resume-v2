import { HttpError, HttpErrorOptions } from "./HttpError";

export class NotFoundError extends HttpError {
  constructor(message: string, options: HttpErrorOptions = {}) {
    super(message, options);
    this.errorType = "NotFoundError";
    this.statusCode = 404;
  }
}
