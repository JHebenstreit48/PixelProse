import { lazy, Suspense } from "react";
import HomeContent from "@/components/homeAndAbout/homeContent";
import '@/scss/shared/homeAndAbout/index.scss';

const QuickDash = lazy(() => import("@/components/homeAndAbout/QuickDash"));

export default function Home() {
  return (
    <>
      <main className="homePage">
        <div className="siteInfo">
          <HomeContent />
          <Suspense fallback={null}>
            <QuickDash />
          </Suspense>
        </div>
      </main>
    </>
  );
}