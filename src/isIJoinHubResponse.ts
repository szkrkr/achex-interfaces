import IJoinHubResponse from "./IJoinHubResponse";

const isIJoinHubResponse = (obj: any): obj is IJoinHubResponse => {
  if ((obj as IJoinHubResponse).joinHub === undefined) {
    return false;
  }
  return true;
};

export default isIJoinHubResponse;
