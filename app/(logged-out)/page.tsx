


import { Button } from "@/components/ui/button";
//rfc homepage
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
      <p className="text-lg text-gray-600">This is the homepage of our application.</p>
        <Button className="mt-6"> Login </Button>  <Button className="mt-6"> Sign Up </Button>

    </div>
  );
}



