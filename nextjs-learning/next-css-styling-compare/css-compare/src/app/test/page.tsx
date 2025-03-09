// @emotion/react
/** @jsxImportSource @emotion/react */

"use client";

import { css as emotionReact } from "@emotion/react";

const emotionReactStyle = emotionReact`
  font-size: 32px;
  color: #CC67BC;
`;

export default function Page() {
  return (
    <div>
      <div css={emotionReactStyle}>@emotion/react</div>
    </div>
  );
}
