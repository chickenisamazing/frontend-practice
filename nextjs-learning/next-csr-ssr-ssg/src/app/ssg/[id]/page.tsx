// 이 페이지는 SSR 방식?

// "use client";

// import { notFound } from "next/navigation";
// app/post/[id]/page.tsx (SSG 방식)
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }]; // 미리 빌드할 ID 목록
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  return <div>My Post: {slug}</div>;
}
