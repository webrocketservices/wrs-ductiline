import { Helmet } from "react-helmet";
import LazyComponent from "../../components/LazyComponent";
import { useFetchWebContentDataQuery } from "../../redux/firebaseSlice";
import NotFound from "../../components/NotFound";
import { WebContentItem } from "../../types";

export default function ArticlesPage() {
  const { data } = useFetchWebContentDataQuery();
  return (
    <>
      <Helmet>
        <title>Ductiline - Piezas</title>
      </Helmet>
      {data?.WebSection.Piezas ? (
        data?.WebSection.Piezas.map((item: WebContentItem, index: number) => {
          return <LazyComponent key={index} data={item} />;
        })
      ) : (
        <NotFound />
      )}
    </>
  );
}
