import ISessionId from "./ISessionId";

type IAuthenticateResponse = {
  auth: "OK";
  SID: ISessionId;
};

export default IAuthenticateResponse;
