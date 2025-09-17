import * as v from "valibot";

// تعریف اسکیما با Valibot و پیام‌های ترجمه‌شده
export const createPhoneSchema = (t: TFunction) => {
  return v.object({
    phoneNumber: v.pipe(
      v.string(),
      v.nonEmpty(t("validation.phone_required")),
      v.regex(/^\+\d{1,4}\d+$/, t("validation.phone_invalid"))
    ),
    countryCode: v.string(),
  });
};

// نوع داده فرم
export type FormData = v.InferOutput<ReturnType<typeof createPhoneSchema>>;
