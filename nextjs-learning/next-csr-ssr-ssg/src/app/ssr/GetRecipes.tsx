export async function GetRecipes() {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://frontend-practice-ebon.vercel.app";

  try {
    const res = await fetch(`${API_URL}/api/recipes`);

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
