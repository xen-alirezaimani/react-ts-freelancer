import type {
  CheckOtpPaylod,
  CheckOtpResponse,
  CompleteProfilePayload,
  CompleteProfileResponse,
  GetOtpPayload,
  GetOtpResponse,
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
