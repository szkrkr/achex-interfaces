import ISendToUserResponse from "./ISendToUserResponse";
import isISendToResponse from "./isISendToResponse";

const isISendToUserResponse = (obj: any): obj is ISendToUserResponse => {
  if (!isISendToResponse(obj)) {
    return false;
  }
  if ((obj as ISendToUserResponse).to === undefined) {
    return false;
  }
  return true;
};

export default isISendToUserResponse;
