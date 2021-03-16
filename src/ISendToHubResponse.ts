import IHubName from "./IHubName";
import ISendToResponse from "./ISendToResponse";

type ISendToHubResponse = {
  toH: IHubName;
} & ISendToResponse;

export default ISendToHubResponse;
