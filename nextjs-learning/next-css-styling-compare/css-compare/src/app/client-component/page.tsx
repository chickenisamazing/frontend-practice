/** @jsxImportSource @emotion/react */

"use client";

// import { useRouter } from "next/navigation";
import Link from "next/link";
import { css as emotionReact } from "@emotion/react";
import { css as emotionCss } from "@emotion/css";
import styled from "styled-components";
import styles from "./page.module.css";

const emotionReactStyle = emotionReact`
  font-size: 32px;
  color: #CC67BC;
`;

const emotionCssStyle = emotionCss`
  font-size: 32px;
  color: #CC67BC;
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
  // const router = useRouter();

  // const refreshPage = () => {
  //   alert("리프레시");
  //   router.refresh();
  // };

  return (
    <div className={styles.container}>
      <div className={styles.board}>클라이언트 컴포넌트</div>
      <div className={styles.test}>CSS Modules</div>
      <div className="global-test">Global CSS</div>
      <div className="text-[32px] text-[#00BCFF]">Tailwind CSS</div>
      <div className={emotionCssStyle}>@emotion/css</div>
      <div css={emotionReactStyle}>@emotion/react</div>
      <StyledComponentStyle>styled-components</StyledComponentStyle>

      {/* <button onClick={() => router.push("/server-component")}>
        서버 컴포넌트로 푸쉬
      </button> */}

      {/* <button type="button" onClick={() => router.replace("/server-component")}>
        서버 컴포넌트로 리플레이스
      </button> */}

      <a href="/server-component">서버 컴포넌트로 에이흐레프</a>
      {/* <button type="button" onClick={refreshPage}>
        리프레시만 하자
      </button> */}
      <Link href="/server-component">Link 컴포넌트 사용</Link>
    </div>
  );
}
