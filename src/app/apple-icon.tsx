import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#1F3A5F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C8A951",
          fontWeight: 700,
          borderRadius: 32,
        }}
      >
        G
      </div>
    ),
    { ...size }
  );
}
