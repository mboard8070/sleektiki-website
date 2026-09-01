import { redirect } from "next/navigation";

export const metadata = {
  title: "Terms of Service - MAUDE",
};

export default function TermsRedirect() {
  redirect("/maude/terms");
}
