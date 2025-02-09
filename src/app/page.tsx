import { redirect } from "next/navigation";
import { defaultLocale } from "./i18n"; // ใช้ค่า locale เริ่มต้น

export default function Home() {
  redirect(`/${defaultLocale}`);
}
