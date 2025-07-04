// import Layout from "../components/layout.jsx";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg cursor-pointer"
            onClick={() => signIn("google")}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return <div className={"bg-blue-900"}>Logged In {session.user.email}</div>;
}
