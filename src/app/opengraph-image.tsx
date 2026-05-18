import { ImageResponse } from "next/og";

export const alt = "GovLeaders Academy - Online Training for Public-Sector Leaders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1F3A5F 0%, #162A44 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#C8A951",
            fontWeight: 600,
            letterSpacing: 4,
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          GovLeaders Academy
        </div>
        <div
          style={{
            fontSize: 52,
            color: "#FFFFFF",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          Online Training for Public-Sector Leaders
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#9BA8B7",
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Courses, certifications, and professional development for government professionals
        </div>
        <div
          style={{
            marginTop: 40,
            width: 80,
            height: 4,
            background: "#C8A951",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
