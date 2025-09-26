import {HttpError} from "http-errors";

export const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message || err.name,
    });
  }
  res.status(500).json({
    message: err.message,
  });
};
