import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Student Work | SleekTiki",
  description:
    "Selected work from students taught by Matthew Board.",
};

export default function StudentWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
