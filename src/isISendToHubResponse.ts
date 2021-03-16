import ISendToHubResponse from "./ISendToHubResponse";
import isISendToResponse from "./isISendToResponse";

const isISendToHubResponse = (obj: any): obj is ISendToHubResponse => {
  if (!isISendToResponse(obj)) {
    return false;
  }
  if ((obj as ISendToHubResponse).toH === undefined) {
    return false;
  }
  return true;
};

export default isISendToHubResponse;
