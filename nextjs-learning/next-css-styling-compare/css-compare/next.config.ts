import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 이 부분 왜 @emotion/react에 영향을 끼치지?
  compiler: {
    // styledComponents: true,
    // emotion: true,
  },
};

export default nextConfig;
