import IErrorResponse from "./IErrorResponse";

const isIErrorResponse = (obj: any): obj is IErrorResponse => {
  if ((obj as IErrorResponse).error === undefined) {
    return false;
  }
  return true;
};

export default isIErrorResponse;
