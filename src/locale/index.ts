import { en } from "./en";
import { fa } from "./fa";

export const locales = { fa, en };
export type LocaleKey = keyof typeof locales;
