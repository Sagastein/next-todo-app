"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex relative flex-col justify-center h-screen bg-sky-100">
      {/* welcome to super todo app */}
      <h1 className="text-4xl font-bold text-center text-sky-900">
        Welcome to Super Todo App
      </h1>
      <p className="text-center text-sky-700">
        Get started by creating a new todo
      </p>
      <div className="flex justify-center mt-4">
        <Button onClick={() => router.push("/todo")}>Get Start</Button>
      </div>
      {/* fotter */}
      <footer className="absolute bottom-0 w-full text-center text-sky-500">
        <p>© 2024 Super Todo App</p>
      </footer>
    </main>
  );
}
