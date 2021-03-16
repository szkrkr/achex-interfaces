import IPayload from "./IPayload";
import IUserName from "./IUserName";

type ISendToUserRequest = {
  to: IUserName;
  payload: IPayload;
};

export default ISendToUserRequest;
