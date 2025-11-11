import type {
  CheckOtpPaylod,
  CheckOtpResponse,
  CompleteProfilePayload,
  CompleteProfileResponse,
  GetOtpPayload,
  GetOtpResponse,
  UserProfileResponse,
} from "../types/auth";

import app from "./httpService";

export function getOtp(payload: GetOtpPayload): Promise<GetOtpResponse> {
  return app.post("/user/get-otp", payload).then(({ data }) => data.data);
}

export function checkOtp(payload: CheckOtpPaylod): Promise<CheckOtpResponse> {
  return app.post("/user/check-otp", payload).then(({ data }) => data.data);
}

export function completeProfile(payload: CompleteProfilePayload): Promise<CompleteProfileResponse> {
  return app.post("/user/complete-profile", payload).then(({ data }) => data.data);
}

export function getUserProfile(): Promise<UserProfileResponse> {
  return app.get("/user/profile").then(({ data }) => data.data);
}
