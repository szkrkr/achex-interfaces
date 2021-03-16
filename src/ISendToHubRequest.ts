import IHubName from "./IHubName";
import IPayload from "./IPayload";

type ISendToHubRequest = {
  toH: IHubName;
  payload: IPayload;
};

export default ISendToHubRequest;
