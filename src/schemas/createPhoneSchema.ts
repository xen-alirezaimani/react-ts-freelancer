import * as v from "valibot";

type TranslateFunction = (key: string) => string;

const createPhoneSchema = (t: TranslateFunction) => {
  return v.object({
    phoneNumber: v.pipe(
      v.string(),
      v.nonEmpty(t("auth.login.validateMessage.emptyNumber")),
      v.regex(/^\d+$/, t("auth.login.validateMessage.invalid"))
    ),
  });
};

export default createPhoneSchema;
