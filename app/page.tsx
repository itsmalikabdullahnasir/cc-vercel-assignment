export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "8%", fontFamily: "Arial, sans-serif" }}>
      <h1>Lab 8 — Vercel Deployment</h1>
      <p style={{ fontSize: "1.2rem" }}>Name: Abdullah Nasir</p>
      <p style={{ fontSize: "1.2rem" }}>Roll: 01-131232-008</p>
      <p style={{ color: "#555" }}>BSE-6 | Cloud Computing | Bahria University</p>
      <hr style={{ margin: "2rem auto", width: "60%" }} />
      <h2>Labs Completed</h2>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2rem" }}>
        <li>Lab 5 — Docker</li>
        <li>Lab 6 — LocalStack</li>
        <li>Lab 7 — Terraform</li>
        <li>Lab 8 — Vercel</li>
      </ul>
      <hr style={{ margin: "2rem auto", width: "60%" }} />
      <h2>API Endpoints</h2>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2rem" }}>
        <li>
          <a href="/api/hello" style={{ color: "#0070f3" }}>
            /api/hello
          </a>
        </li>
        <li>
          <a href="/api/student/001" style={{ color: "#0070f3" }}>
            /api/student/001
          </a>
        </li>
        <li>
          <a href="/api/student/999" style={{ color: "#0070f3" }}>
            /api/student/999 (404)
          </a>
        </li>
        <li>
          <a href="/api/geo" style={{ color: "#0070f3" }}>
            /api/geo (Edge)
          </a>
        </li>
      </ul>
    </main>
  );
}
