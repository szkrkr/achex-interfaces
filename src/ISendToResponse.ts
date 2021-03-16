import IPayload from "./IPayload";
import IUserName from "./IUserName";
import ISessionId from "./ISessionId";

type ISendToResponse = {
  payload: IPayload;
  sID: ISessionId;
  FROM: IUserName;
};

export default ISendToResponse;
