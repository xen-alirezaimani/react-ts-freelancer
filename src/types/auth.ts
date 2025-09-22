export interface GetOtpRequest {
  phoneNumber: string;
}

export interface GetOtpResponse {
  status: "error" | "success";
  message: string;
  otpId?: string;
}

export interface Country {
  name: string;
  code: string;
  dialCode: string;
}
