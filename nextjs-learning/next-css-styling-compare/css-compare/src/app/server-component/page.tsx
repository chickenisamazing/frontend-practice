// /** @jsxImportSource @emotion/react */

// import Image from "next/image";

// 이모션 (리액트)
// import { css } from "@emotion/react";

// 이모션 (리액트)
// import { css as emotionReact } from "@emotion/react";

// 이모션 (css)
import { css as emotionCss } from "@emotion/css";

//
// import styled from "@emotion/styled";

import styles from "./page.module.css";
// import { GetRecipes } from "./GetRecipes";
// import Link from "next/link";

// const titleStyle = emotionReact`
//   font-size: 32px;
//   color: #0070f3;
// `;

const titleStyle2 = emotionCss`
  font-size: 32px;
  color: #0070f3;
`;

// const myDiv = styled.div({ fontSize: 32 });
// const myDiv2 = styled.div`
//   fontsize: 32;
// `;
// const myDiv3 = styled("div")({ fontSize: 32 });
// const Title = styled.div`
//   font-size: 32px;
//   color: #0070f3;
// `;

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
    <div>
      <div className={styles.title}>
        {/* <div className={styles.board}>SSR 페이지</div> */}
        <div className={styles.board}>서버 컴포넌트</div>
        <div className={styles.title}>하하핳</div>
        <div className="global">globals.css</div>
        {/* @emotion/react - 리액트 전용 - fouc 발생 안함 굿 */}
        {/* <div css={titleStyle}>EMOTION client component</div> */}

        {/* @emotion/css - 프레임 워크 구애 x - fouc 발생 */}
        <div className={titleStyle2}>EMOTION client component</div>

        {/* <myDiv3>안녕</myDiv3> */}
        {/* <div className="text-4xl text-[#0070f3]">
          TAILWIND in server component
        </div> */}
        {/* <Title>STYLED-COMPONENT TEST</Title> */}
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
        <div className={styles.board2}>
          Copyright ⓒ 2025 kea. All rights reserved.
        </div>
      </div>
    </div>
  );
}
