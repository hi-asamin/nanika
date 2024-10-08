import type { MetaFunction } from "@remix-run/node";
import { FloatingNav } from "~/components/base/FloatingNav";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function SpotsRegister() {
  return (
    <>
      <div className="flex">投稿ページ製作中です</div>
      <FloatingNav />
    </>
  );
}
