import { redirect } from "next/navigation";

export const metadata = {
  title: "Privacy Policy - MAUDE",
};

export default function PrivacyRedirect() {
  redirect("/maude/privacy");
}
