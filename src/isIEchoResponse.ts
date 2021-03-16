import IEchoResponse from "./IEchoResponse";

const isIEchoResponse = (obj: any): obj is IEchoResponse => {
  if (!("echo" in obj)) {
    return false;
  }
  return true;
};

export default isIEchoResponse;
