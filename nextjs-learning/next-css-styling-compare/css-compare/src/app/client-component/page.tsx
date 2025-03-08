/** @jsxImportSource @emotion/react */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// @emotion/react
import { css as emotionReact } from "@emotion/react";

// @emotion/css
import { css as emotionCss } from "@emotion/css";

// styled-components
import styled from "styled-components";

// CSS Modules
import styles from "./page.module.css";

const emotionReactStyle = emotionReact`
  font-size: 32px;
  color: #CC67BC;
`;

const emotionCssStyle = emotionCss`
  font-size: 32px;
  color: #CC67BC
`;

const StyledComponentStyle = styled.div`
  font-size: 32px;
  color: #e4976f;
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

  // const API_URL =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000"
  //     : "https://frontend-practice-ebon.vercel.app";

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(`${API_URL}/api/recipes`, {
  //         // cache: "force-cache",
  //         next: { revalidate: 10 },
  //       });
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await res.json();
  //       setDatas(data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, [API_URL]);

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
    <div className={styles.container}>
      <div className={styles.board}>클라이언트 컴포넌트</div>
      <div className={styles.test}>CSS Moudles</div>
      <div className="global-test">Global CSS</div>
      <div className="text-[32px] text-[#00BCFF]">Tailwind CSS</div>
      {/* @emotion/react - 리액트 전용 - fouc 발생 안함 굿 */}
      <div css={emotionReactStyle}>@emotion/react</div>
      {/* <div className={titleStyle}>EMOTION TEST in client component</div> */}

      {/* @emotion/css - 프레임 워크 구애 x - fouc 발생 */}
      <div className={emotionCssStyle}>@emotion/css</div>
      {/* <button onClick={() => router.push("/ssr")}>
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
          {/* Link 컴포넌트 사용
      {/* 서버 컴포넌트로 링크 */}
      {/* </Link{"}"} */}
      <StyledComponentStyle>styled-components</StyledComponentStyle>
      {/* <div className={titleStyle}>EMOTION TEST in client component</div> */}

      {/* <div className={styles["grid-container"]}>
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
        </div> */}
      {/* <div className={styles.board2}>
          Copyright ⓒ 2025 kea. All rights reserved.
        </div>
      </div> */}
    </div>
  );
}
