import { BoardList } from "./_components/board-list";
import { EmptyOrg } from "./_components/empty-org";
import { auth } from "@clerk/nextjs/server";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string;
    favorites?: string;
  }>;
}

export default async function DashboardPage(props: DashboardPageProps) {
  // ✅ FIX 1: Await searchParams (Next.js passes a Promise)
  const searchParams = await props.searchParams;

  // ✅ FIX 2: Get active organization ID server-side
  const { orgId } = await auth();

  return (
    <div className="flex-1 h-[calc(100%-80px)]">
      {!orgId ? <EmptyOrg /> : <BoardList orgId={orgId} query={searchParams} />}
    </div>
  );
}
