import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YahyaAdmin | Next.js Dashboard ",
  description: "This is Home Blog page for TailAdmin Next.js",
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
