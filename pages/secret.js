import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchSessionData = async () => {
      const res = await fetch("/api/secret");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchSessionData();
  }, [session]);
  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return (
      <main>
        <div>
          <h1>You arent signed in, please sign in first</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        <h1>Protected Page</h1>
        <p>{content}</p>
      </div>
    </main>
  );
}
