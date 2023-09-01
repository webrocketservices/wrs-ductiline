import { lazy, Suspense } from "react";
import { WebContentItem } from "../types";
// import DummyData from "../DummyData";

type CompProps = {
  data: WebContentItem;
};

export default function LazyComponent({ data }: CompProps) {
  const LazyLoadedComponent = lazy(() =>
    import(`./${data.component}`).catch(() => {})
  );
  return (
    <Suspense fallback={<>Error loading...</>}>
      <LazyLoadedComponent data={data} />
    </Suspense>
  );
}
