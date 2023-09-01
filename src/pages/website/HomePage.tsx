import { Helmet } from "react-helmet";
import LazyComponent from "../../components/LazyComponent";
import { useFetchWebContentDataQuery } from "../../redux/firebaseSlice";
import { WebContentItem } from "../../types";
import NotFound from "../../components/NotFound";

export default function HomePage() {
  const { data } = useFetchWebContentDataQuery();
  return (
    <>
      <Helmet>
        <title>Ductiline - Inicio</title>
      </Helmet>
      {data?.WebSection.Home ? (
        data?.WebSection.Home.map((item: WebContentItem, index: number) => {
          return <LazyComponent key={index} data={item} />;
        })
      ) : (
        <NotFound />
      )}
    </>
  );
}
