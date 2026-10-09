import { ImageResponse } from "next/og";

export const alt = "Ayatiworks Performance Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#ffffff", color: "#161A25", display: "flex", width: "100%", height: "100%", padding: "74px", position: "relative" }}>
        <div style={{ position: "absolute", right: "-120px", top: "-140px", width: "510px", height: "510px", borderRadius: "50%", background: "#e8efff" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "850px" }}>
          <div style={{ color: "#1141F5", fontSize: 28, fontWeight: 700, letterSpacing: 3 }}>AYATIWORKS</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 30 }}>
            <div>Performance Marketing That</div>
            <div style={{ color: "#1141F5" }}>Pays for Itself.</div>
          </div>
          <div style={{ color: "#667085", fontSize: 29, marginTop: 30 }}>Google, Meta and programmatic campaigns engineered for measurable growth.</div>
        </div>
      </div>
    ),
    size,
  );
}
