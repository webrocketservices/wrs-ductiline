import { lazy, Suspense } from "react";
import { WebContentItem } from "../types";
import Loader from "./Loader";
import ErrorBoundary from "./ErrorBoundary";
type CompProps = {
  data: WebContentItem;
};

export default function LazyComponent({ data }: CompProps) {
  const LazyLoadedComponent = lazy(() =>
    import(`../dynamicComponents/${data.component}.tsx`).catch(() => {
      console.log("algo falló", data.component);
    })
  );
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <LazyLoadedComponent data={data} />
      </Suspense>
    </ErrorBoundary>
  );
}
