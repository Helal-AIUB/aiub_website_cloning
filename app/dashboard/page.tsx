
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/app/lib/db";
import DashboardClientPage from "./dashboard-client";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;

  if (!sessionId) redirect("/login");

  const user = await db.user.findUnique({
    where: { id: sessionId },
    select: { id: true, name: true, email: true }
  });

  if (!user) redirect("/login");

  // Admin Check
  if (user.email !== "admin@gmail.com") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold">You're not an admin</h1>
        <form action="/api/auth/logout" method="POST" className="mt-8">
          <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded">Logout</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-10">AIUB Admin Portal</h1>
          <p className="text-slate-400 text-sm">Logged in as {user.email}</p>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button type="submit" className="w-full bg-red-600 py-2 rounded">Logout</button>
        </form>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">Welcome, AIUB Admin!</h2>
        </header>
        <DashboardClientPage />
      </main>
    </div>
  );
}