import { AxiosError } from "axios";
import { HttpError } from "../utils/errors/HttpError";
import { BadRequestError } from "../utils/errors/BadRequestError";
import { NotFoundError } from "../utils/errors/NotFoundError";

/**
 * Shared from Birddog API
 */
interface IBirddogError extends Error {
  errorType: string;
  statusCode: number;
  innerError?: Error;
}

export const mapToError = (error: AxiosError<IBirddogError>): HttpError => {
  if (error.response) {
    const errorMessage = `${error.response.status}: ${error.response.data.message}`;
    const options = {
      statusCode: error.response.status,
      innerError: error.response.data.innerError,
    };
    switch (error.response.status) {
      case 400:
        return new BadRequestError(errorMessage, options);
        break;
      case 404:
        return new NotFoundError(errorMessage, options);
        break;
      case 500:
        return new HttpError(errorMessage, options);
        break;
      default:
        return new HttpError(errorMessage, options);
        break;
    }
  }
  return new HttpError(error.message);
};
