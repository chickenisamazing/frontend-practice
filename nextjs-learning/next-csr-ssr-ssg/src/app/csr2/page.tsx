"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { css } from "@emotion/css";

// 이모션
import { css } from "@emotion/css";
// 스타일드 컴포넌트
import styled from "styled-components";

import styles from "./page.module.scss";
// import Loader from "@/component/Loader";

const titleStyle = css`
  font-size: 50px;
  color: #f03857;
`;

const Title = styled.div`
  font-size: 50px;
  color: #f03857;
`;

interface Ingredient {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  unit: string;
}

interface Recipe {
  recipeId: number;
  name: string;
  description: string;
  image: string;
  ingredient: {
    required: Ingredient[];
    optional: Ingredient[];
  };
  instruction: string[];
}

export default function Page() {
  const router = useRouter();
  const [datas, setDatas] = useState<Recipe[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // const refreshPage = () => {
  //   alert("리프레시되냐");
  //   router.refresh();
  // };

  const refreshPage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    alert("리프레시되냐");
    router.refresh();
    alert("리프레시되냐고");
  };

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://frontend-practice-ebon.vercel.app";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/api/recipes`, {
          // cache: "force-cache",
          next: { revalidate: 10 },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setDatas(data);
      } catch (error) {
        console.error(error);
      } finally {
        // setLoading(false);
      }
    }
    fetchData();
  }, [API_URL]);

  // const buttonOnClick = (num: number, type: string) => {
  //   router.push(`/${type}/${num}`);
  // };

  // if (loading)
  //   return (
  //     <div className={styles.loading}>
  //       <Loader />
  //     </div>
  //   );

  return (
    <div>
      <div className={styles.title}>
        {/* <div className={styles.board}>CSR 페이지</div> */}
        <div className={styles.board}>클라이언트 컴포넌트</div>
        {/* <div className={titleStyle}>EMOTION TEST in client component</div> */}
        <button onClick={() => router.push("/ssr")}>
          서버 컴포넌트로 푸쉬
        </button>

        <button type="button" onClick={() => router.replace("/ssr")}>
          서버 컴포넌트로 리플레이스
        </button>

        <a href="/ssr">서버 컴포넌트로 에이흐레프</a>
        <button type="button" onClick={refreshPage}>
          리프레시만 하자
        </button>
        <Link href="/ssr">
          {" "}
          {/* Link 컴포넌트 사용 */}
          서버 컴포넌트로 링크
        </Link>
        <Title>STYLED-COMPONENT TEST</Title>
        <div className={titleStyle}>EMOTION TEST in client component</div>

        <div className="text-4xl text-[#0070f3]">
          TAILWIND in client component
        </div>
        <div className={styles["grid-container"]}>
          {datas.map((data) => (
            <div className={styles.section} key={data.recipeId}>
              <div className={styles["img-container"]}>
                <Image
                  title={data.description}
                  src={data.image}
                  alt="File icon"
                  width={256}
                  height={256}
                />
              </div>
              <div className={styles.btn}>{data.name}</div>
              <div className={styles.description}>{data.description}</div>
            </div>
          ))}
        </div>
        <div className={styles.board2}>
          Copyright ⓒ 2025 kea. All rights reserved.
        </div>
      </div>
    </div>
  );
}
