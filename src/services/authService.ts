import type {
  CheckOtpPaylod,
  CheckOtpResponse,
  CompleteProfilePayload,
  CompleteProfileResponse,
  GetOtpPayload,
  GetOtpResponse,
  UserProfile,
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

export function getUserProfile(): Promise<UserProfile> {
  return app.get("/user/profile").then(({ data }) => data.data.user);
}

export function logoutApi(): Promise<any> {
  return app.post("/user/logout").then(({ data }) => data.data);
}
