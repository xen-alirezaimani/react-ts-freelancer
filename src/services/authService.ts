import app from "./httpService";
import type { GetOtpRequest } from "../types/auth";

export function getOtp(data: GetOtpRequest) {
  return app.post("/user/get-otp", data).then(({ data }) => data.data);
}
