import IPayload from "./IPayload";
import ISessionId from "./ISessionId";

type ISendToUserRequest = {
  toS: ISessionId;
  payload: IPayload;
};

export default ISendToUserRequest;
