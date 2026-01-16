export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Welcome to Xpertly Demo</h1>
      <p>This is an updated homepage with new styling and content.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Features</h2>
        <ul>
          <li>Automatic Vercel deployments</li>
          <li>Preview deployments for PRs</li>
          <li>Modern Next.js architecture</li>
        </ul>
      </div>
    </main>
  );
}
