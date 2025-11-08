import * as v from "valibot";

type TranslateFunction = (key: string) => string;
const roles = ["OWNER", "FREELANCER"] as const;

const createCompleteProfileSchema = (t: TranslateFunction) => {
  return v.object({
    fullName: v.pipe(
      v.string("Your name must be a string"),
      v.nonEmpty(t("auth.completeProfile.fields.name.validateMessage.empty")),
      v.regex(/^\D.*$/, t("auth.completeProfile.fields.name.validateMessage.cantStartNumber"))
    ),
    email: v.pipe(
      v.string(),
      v.nonEmpty(t("auth.completeProfile.fields.email.validateMessage.empty")),
      v.email(t("auth.completeProfile.fields.email.validateMessage.invalid"))
    ),
    role: v.picklist(roles),
  });
};

export default createCompleteProfileSchema;
