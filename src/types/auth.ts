import type * as v from "valibot";

import type createCompleteProfileSchema from "../schemas/createCompleteProfileSchema";
import type createPhoneSchema from "../schemas/createPhoneSchema";

export interface ApiError {
  statusCode: number;
  message: string;
}

export interface GetOtpPayload {
  phoneNumber: string;
}

export interface GetOtpResponse {
  message: string;
  expiresIn: number;
  phoneNumber: string;
}

export interface CheckOtpPaylod {
  phoneNumber: string;
  otp: string;
}

interface OtpInfo {
  code: string;
  expiresIn: string;
}
export interface User {
  otp: OtpInfo;
  _id: string;
  biography: string | null;
  phoneNumber: string;
  resetLink: string | null;
  isVerifiedPhoneNumber: boolean;
  isActive: boolean;
  status: number;
  role: "ADMIN" | "FREELANCER" | "OWNER";
  createdAt: string;
  updateAt: string;
  __v: number;
  email: string;
  name: string;
  avatarUrl: string | null;
}

export interface CheckOtpResponse {
  message: string;
  user: User;
}

export interface CompleteProfilePayload {
  name: string;
  email: string;
  role: string;
}

export interface CompleteProfileResponse {
  message: string;
  user: User;
}

export type UserProfileResponse = Omit<User, "otp">;
export interface Country {
  name: string;
  code: string;
  dialCode: string;
}

export type SendOtpFormData = v.InferOutput<ReturnType<typeof createPhoneSchema>>;
export type ProfileFormData = v.InferOutput<ReturnType<typeof createCompleteProfileSchema>>;
