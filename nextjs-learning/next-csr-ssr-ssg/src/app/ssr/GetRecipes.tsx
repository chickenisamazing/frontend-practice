export async function GetRecipes() {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `${process.env.VERCEL_URL}`;

  try {
    const res = await fetch(`${API_URL}/api/recipes`);

    if (res.ok) {
      const data = await res.json();
      return data;
    }

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return;
  }
}
