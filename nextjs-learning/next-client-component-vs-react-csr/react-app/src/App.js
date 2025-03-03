import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setData("푸라닭 고추마요 최고");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ textAlign: "center", padding: "20px", background: "#e3f2fd" }}
    >
      <h1 style={{ margin: "15px", color: "white" }}>React</h1>
      <h2 style={{ color: "white" }}>Client Side Rendering(CSR)</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          background: data ? "#4caf50" : "#bdbdbd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "18px",
        }}
      >
        {data ? "실행 완료!" : "로딩 중..."}
      </div>
    </div>
  );
}
