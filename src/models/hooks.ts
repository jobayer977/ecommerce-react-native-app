import { ApiServices } from "../services";
import { MutationConfig } from "../config";
export interface IOTPSendHook {
  config?: MutationConfig<typeof ApiServices.otpSend>;
}
