import * as v from "valibot";

type TranslateFunction = (key: string) => string;

const completeProfileSchema = (t: TranslateFunction) => {
  return v.object({ name: v.pipe(v.string(), v.nonEmpty()) });
};
