import styles from "./page.module.scss";
import { revalidatePath } from "next/cache";

import createConnection from "./CreateConnection.js";

export default async function RecipeList() {
  const connection = await createConnection();
  let recipes = [];

  try {
    const [rows] = await connection.execute("SELECT * FROM recipe");
    recipes = rows;
  } catch (error) {
    console.error("데이터베이스 조회 오류:", error);
  } finally {
    await connection.end();
  }

  async function submitData(formData) {
    "use server";
    const connection = await createConnection();

    try {
      const recipeName = formData.get("recipe_name");
      const recipeComment = formData.get("recipe_comment");
      const authorName = formData.get("author_name");

      await connection.execute(
        "INSERT INTO recipe (recipe_name, recipe_comment, author_name) VALUES (?,?,?)",
        [recipeName, recipeComment, authorName]
      );

      revalidatePath("/");
    } catch (error) {
      console.error("DB 저장 오류", error);
    } finally {
      await connection.end();
    }
  }

  return (
    <div>
      <div className={styles.text}>레시피 목록</div>
      {recipes.length === 0 ? (
        <p>등록된 레시피가 없습니다.</p>
      ) : (
        <div className={styles.container}>
          <ul className={styles.grid}>
            {recipes.map((recipe) => (
              <div className={styles.recipes} key={recipe.recipe_seq}>
                <div className={styles["recipe-name"]}>
                  {recipe.recipe_name}
                </div>
                <div className={styles["recipe-comment"]}>
                  {recipe.recipe_comment}
                </div>
                <div>{recipe.author_name}의 레시피</div>
              </div>
            ))}
            <div className={styles["recipe-submit"]}>
              <form action={submitData}>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="레시피 이름"
                    id="recipe_name"
                    name="recipe_name"
                  />
                </div>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="한 줄 코멘트"
                    id="recipe_comment"
                    name="recipe_comment"
                  />
                </div>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="글쓴이"
                    id="author_name"
                    name="author_name"
                  />
                </div>
                <button className={styles["submit-button"]} type="submit">
                  제출
                </button>
              </form>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
