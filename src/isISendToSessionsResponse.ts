import ISendToSessionsResponse from "./ISendToSessionsResponse";
import isISendToResponse from "./isISendToResponse";

const isISendToSessionsResponse = (
  obj: any
): obj is ISendToSessionsResponse => {
  if (!isISendToResponse(obj)) {
    return false;
  }
  if ((obj as ISendToSessionsResponse).toS === undefined) {
    return false;
  }
  return true;
};

export default isISendToSessionsResponse;
