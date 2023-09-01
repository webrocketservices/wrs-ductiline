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
        <title>{import.meta.env.VITE_PROJECT_NAME} - Contacto</title>
      </Helmet>
      {data?.WebSection.Contacto ? (
        data?.WebSection.Contacto.map((item: WebContentItem, index: number) => {
          return <LazyComponent key={index} data={item} />;
        })
      ) : (
        <NotFound />
      )}
    </>
  );
}
