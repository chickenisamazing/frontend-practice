"use client";

import styled from "styled-components";
// import { useState, useEffect } from "react";

const Title = styled.div`
  display: flex;
  text-align: center;
  color: blue;
`;

export default function Page() {
  //   const [isClient, setIsClient] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  // const Title = styled.div`
  //   display: flex;
  //   text-align: center;
  // `;

  //   if (!isClient) {
  //     return null;
  //   }
  return (
    <div>
      <Title>CSS 테스트 페이지</Title>
    </div>
  );
}
