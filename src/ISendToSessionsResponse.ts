import ISendToResponse from "./ISendToResponse";
import ISessionId from "./ISessionId";

type ISendToSessionsResponse = {
  toS: ISessionId;
} & ISendToResponse;

export default ISendToSessionsResponse;
