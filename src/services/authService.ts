import type { GetOtpRequest, GetOtpResponse } from "../types/auth";

import app from "./httpService";

export function getOtp(payload: GetOtpRequest): Promise<GetOtpResponse> {
  return app.post("/user/get-otp", payload).then(({ data }) => data.data);
}
