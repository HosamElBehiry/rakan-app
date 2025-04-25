import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "@/app/globals.css";

const Font = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`max-w-[1440px] mx-auto ${Font.className}`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
