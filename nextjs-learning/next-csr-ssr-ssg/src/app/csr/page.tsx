"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
// import { css } from "@emotion/css";

import styles from "./page.module.scss";
import Loader from "@/component/Loader";

// const titleStyle = css`
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

export default function Page() {
  // const router = useRouter();
  const [datas, setDatas] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://frontend-practice-ebon.vercel.app";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/api/recipes`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setDatas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [API_URL]);

  // const buttonOnClick = (num: number, type: string) => {
  //   router.push(`/${type}/${num}`);
  // };

  if (loading)
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );

  return (
    <div>
      <div className={styles.title}>
        <div className={styles.board}>CSR 페이지</div>
        {/* <div className={titleStyle}>CSR EMOTION TEST</div> */}
        <div className={styles["grid-container"]}>
          {datas.map((data) => (
            <div
              className={styles.section}
              key={data.recipeId}
              // onClick={() => buttonOnClick(data.recipeId)}
            >
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
              {/* <div className={styles.detail}>
                <button onClick={() => buttonOnClick(data.recipeId, "csr")}>
                  CSR 상세
                </button>
                <button onClick={() => buttonOnClick(data.recipeId, "ssr")}>
                  SSR 상세
                </button>
                <button onClick={() => buttonOnClick(data.recipeId, "ssg")}>
                  SSG 상세
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
