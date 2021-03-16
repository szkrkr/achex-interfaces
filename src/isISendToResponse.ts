import ISendToResponse from "./ISendToResponse";

const isISendToResponse = (obj: any): obj is ISendToResponse => {
  if ((obj as ISendToResponse).payload === undefined) {
    return false;
  }
  if ((obj as ISendToResponse).sID === undefined) {
    return false;
  }
  if ((obj as ISendToResponse).FROM === undefined) {
    return false;
  }
  return true;
};

export default isISendToResponse;
