import ILeaveHubResponse from "./ILeaveHubResponse";

const isILeaveHubResponse = (obj: any): obj is ILeaveHubResponse => {
  if ((obj as ILeaveHubResponse).leaveHub === undefined) {
    return false;
  }
  return true;
};

export default isILeaveHubResponse;
