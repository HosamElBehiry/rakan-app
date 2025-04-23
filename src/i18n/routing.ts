import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "tr"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
});
