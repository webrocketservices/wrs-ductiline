import { Helmet } from "react-helmet";
import LazyComponent from "../../components/LazyComponent";
import { useFetchWebContentDataQuery } from "../../redux/firebaseSlice";
import NotFound from "../../components/NotFound";
import { WebContentItem } from "../../types";

export default function ValuesPage() {
  const { data } = useFetchWebContentDataQuery();
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_PROJECT_NAME} - Misión y Valores</title>
      </Helmet>
      {data?.WebSection.MisionValores ? (
        data?.WebSection.MisionValores.map(
          (item: WebContentItem, index: number) => {
            return <LazyComponent key={index} data={item} />;
          }
        )
      ) : (
        <NotFound />
      )}
    </>
  );
}
