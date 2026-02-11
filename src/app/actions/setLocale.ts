"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

/**
 * Set user locale and stay on the same page.
 * @param locale 'en' | 'de'
 * @param returnTo the current pathname (e.g. '/projects')
 */
export async function setLocale(locale: "en" | "de", returnTo: string = "/") {
  const store = await cookies();

  store.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  // Redirect back to the same path
  redirect(returnTo);
}
