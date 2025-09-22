import type { GetOtpRequest } from "../types/auth";

import app from "./httpService";

export function getOtp(payload: GetOtpRequest) {
  return app.post("/user/get-otp", payload).then(({ data }) => data.data);
}
