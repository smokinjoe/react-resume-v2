import { AxiosError } from "axios";
import { HttpError } from "../utils/errors/HttpError";
import { errorMap } from "../utils/errors/errorMap";

/**
 * Shared from Birddog API
 */
interface IBirddogError extends Error {
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

    const ErrorConstructor = errorMap.get(error.response.status) ?? HttpError;
    return new ErrorConstructor(errorMessage, options);
  }
  return new HttpError(error.message);
};
