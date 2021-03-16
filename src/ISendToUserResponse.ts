import IUserName from "./IUserName";
import ISendToResponse from "./ISendToResponse";

type ISendToUserResponse = {
  to: IUserName;
} & ISendToResponse;

export default ISendToUserResponse;
