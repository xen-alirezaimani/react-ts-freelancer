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

export interface Country {
  name: string;
  code: string;
  dialCode: string;
}

export type FormData = v.InferOutput<ReturnType<typeof createPhoneSchema>>;
