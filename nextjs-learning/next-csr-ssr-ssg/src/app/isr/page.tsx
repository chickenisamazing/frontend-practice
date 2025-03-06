import { notFound } from "next/navigation";
import Image from "next/image";

import styles from "./page.module.scss";

// 이모션
import { css } from "@emotion/css";
// 스타일드 컴포넌트
// import styled from "styled-components";

const titleStyle = css`
  font-size: 32px;
  color: #0070f3;
`;

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

export async function generateStaticParams() {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://frontend-practice-ebon.vercel.app";

  try {
    // const res = await fetch(`${API_URL}/api/recipes`, { cache: "no-store" });
    const res = await fetch(`${API_URL}/api/recipes`);
    const data = await res.json();

    return data.map((recipe: { recipeId: number }) => ({
      id: recipe.recipeId.toString(),
    }));
  } catch (error) {
    console.error(`generateStaticParams 에러 : `, error);
    return [];
  }
}

export default async function Page() {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://frontend-practice-ebon.vercel.app";

  const res = await fetch(`${API_URL}/api/recipes/`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <div className={styles.title}>
        <div className={styles.board}>ISR 페이지</div>
        {/* <Title>STYLED-COMPONENT TEST</Title> */}
        <div className={titleStyle}>EMOTION TEST in client component</div>

        <div className="text-4xl text-[#0070f3]">
          TAILWIND in client component
        </div>
        <div className={styles["grid-container"]}>
          {data.map((recipe: Recipe) => (
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
        </div>
        <div className={styles.board2}>
          Copyright ⓒ 2025 kea. All rights reserved.
        </div>
      </div>
    </div>
  );
}
