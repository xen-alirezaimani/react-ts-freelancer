import type * as v from "valibot";

import type createPhoneSchema from "../schemas/createPhoneSchema";

export interface GetOtpRequest {
  phoneNumber: string;
}

export interface GetOtpResponse {
  message: string;
  expiresIn: number;
  phoneNumber: string;
}

export interface CheckOtpRequest {
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

export interface CompleteProfile {
  name: string;
  email: string;
  role: string;
}

export interface Country {
  name: string;
  code: string;
  dialCode: string;
}

export type FormData = v.InferOutput<ReturnType<typeof createPhoneSchema>>;
