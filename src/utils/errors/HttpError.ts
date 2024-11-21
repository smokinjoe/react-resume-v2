export type HttpErrorOptions = {
  statusCode?: number;
  innerError?: Error;
};

export class HttpError extends Error {
  errorType = "HttpError";
  innerError?: Error;
  statusCode = 500;

  constructor(message: string, options: HttpErrorOptions = {}) {
    super(message);

    this.name = "HttpError";
    this.innerError = options?.innerError;
    this.statusCode = options?.statusCode ?? 500;
  }
}
