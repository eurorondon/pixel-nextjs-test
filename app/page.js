import Link from "next/link";

export default function Home() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <h2>
        Go to `app/layout.js` to see how to implement Facebook Pixel in Next.js
        13 with the App Router
      </h2>
      <h2>If you want to see old implementation, go to `_pages/index.js`</h2>
      <Link href="/about">About page</Link>
    </div>
  );
}
