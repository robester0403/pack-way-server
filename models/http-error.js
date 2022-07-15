// an export for defining the error code and the associated message
class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}
module.exports = HttpError;
