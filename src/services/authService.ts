import type { CheckOtpRequest, CheckOtpResponse, GetOtpRequest, GetOtpResponse } from "../types/auth";

import app from "./httpService";

export function getOtp(payload: GetOtpRequest): Promise<GetOtpResponse> {
  return app.post("/user/get-otp", payload).then(({ data }) => data.data);
}

export function checkOtp(payload: CheckOtpRequest): Promise<CheckOtpResponse> {
  return app.post("/user/check-otp", payload).then(({ data }) => data.data);
}
