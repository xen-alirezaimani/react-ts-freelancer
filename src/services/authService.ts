import app from "./httpService";
import type { GetOtpRequest } from "../types/auth";

export function getOtp(data: GetOtpRequest) {
  return app.post("/user/get-otp", data).then(({ data }) => data.data)
}

export function setOtp(data: GetOtpRequest) {
  return app.post("/user/get-otp", data).then(({ data }) => data.data)
}

export function setOtp2(data: GetOtpRequest) {
  return app.post("/user/get-otp", data).then(({ data }) => data.data)
}
