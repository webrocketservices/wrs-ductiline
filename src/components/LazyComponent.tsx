import { lazy, Suspense } from "react";
import { WebContentItem } from "../types";
import Loader from "./Loader";

type CompProps = {
  data: WebContentItem;
};

export default function LazyComponent({ data }: CompProps) {
  const LazyLoadedComponent = lazy(() =>
    import(`./${data.component}`).catch(() => {})
  );
  return (
    <Suspense fallback={<Loader />}>
      <LazyLoadedComponent data={data} />
    </Suspense>
  );
}
