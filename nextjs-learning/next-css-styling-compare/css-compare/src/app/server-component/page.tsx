// /** @jsxImportSource @emotion/react */

// import Image from "next/image";

// 이모션 (리액트)
// import { css } from "@emotion/react";

// 이모션 (리액트)
// import { css as emotionReact } from "@emotion/react";

// 이모션 (css)
import { css as emotionCss } from "@emotion/css";

// styled-components
// import styled from "styled-components";

import styles from "./page.module.css";
// import { GetRecipes } from "./GetRecipes";
// import Link from "next/link";

const emotionCssStyle = emotionCss`
  font-size: 32px;
  color: #CC67BC;
`;

// const StyledComponentStyle = styled.div`
//   font-size: 32px;
//   color: #e4976f;
// `;

// interface Ingredient {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   quantity: number;
//   unit: string;
// }

// interface Recipe {
//   recipeId: number;
//   name: string;
//   description: string;
//   image: string;
//   ingredient: {
//     required: Ingredient[];
//     optional: Ingredient[];
//   };
//   instruction: string[];
// }

// export async function GetRecipes() {
//   const API_URL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://kea-pantry.vercel.app";

//   try {
//     const res = await fetch(`${API_URL}/api/recipes`);

//     if (res.ok) {
//       const data = await res.json();
//       return data;
//     }

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// }

export default async function Page() {
  // const recipesData = await GetRecipes();

  // const Title = styled.div`
  //   font-size: 32px;
  //   color: #0070f3;
  // `;

  return (
    <div className={styles.container}>
      <div className={styles.board}>서버 컴포넌트</div>

      {/* CSS Modules */}
      <div className={styles["css-modules-style"]}>CSS Modules</div>

      {/* Global CSS */}
      <div className="global-css-style">Global CSS</div>

      {/* Tailwind CSS */}
      <div className="text-[32px] text-[#00BCFF]">Tailwind CSS</div>

      {/* @emotion/css - 프레임 워크 구애 x - fouc 발생 */}
      <div className={emotionCssStyle}>@emotion/css</div>

      {/* @emotion/react - 리액트 전용 - fouc 발생 안함 굿 */}
      {/* <div css={titleStyle}>@emotion/react</div> */}

      {/* <StyledComponentStyle>styled-components</StyledComponentStyle> */}

      {/* 아래는 데이터 부분 */}
      {/* <div className={styles["grid-container"]}>
          {recipesData.map((recipe: Recipe) => (
            <div className={styles.section} key={recipe.recipeId}>
              <div className={styles["img-container"]}>
                <Image
                  title={recipe.description}
                  src={recipe.image}
                  alt="File icon"
                  width={256}
                  height={256}
                />
              </div>

              <div className={styles.btn}>{recipe.name}</div>
              <div className={styles.description}>{recipe.description}</div>
            </div>
          ))}
        </div> */}
      {/* <div className={styles.board2}>
        Copyright ⓒ 2025 kea. All rights reserved.
      </div> */}
      {/* </div> */}
    </div>
  );
}
