import {cookies} from "next/headers";
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get("locale")?.value;
  const locale = cookieLocale === "de" ? "de" : "en"; // fallback to 'en'
  
  // Static for now, we'll change this later
  // const locale = 'en';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});