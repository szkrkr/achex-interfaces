import IAuthenticateResponse from "./IAuthenticateResponse";

const isIAuthenticateResponse = (obj: any): obj is IAuthenticateResponse => {
  if (!("auth" in obj)) {
    return false;
  }
  if (!("SID" in obj)) {
    return false;
  }
  return true;
};

export default isIAuthenticateResponse;
