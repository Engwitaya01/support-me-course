import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
//rfc homepage
export default function Home() {
  return (
    <>
      <h1 className="flex gap-2 items-center ">
        <PersonStandingIcon size={50} className=" text-pink-500" /> Support
        Me{" "}
      </h1>
      <p>This is the dashboard of our application.</p>
      <div className="mt-6 flex items-center gap-3">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>

        <small>or</small>
        <Button variant="outline" asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
