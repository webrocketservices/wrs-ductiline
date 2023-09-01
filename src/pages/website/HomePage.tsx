import { Helmet } from "react-helmet";
import LazyComponent from "../../components/LazyComponent";
import { useFetchWebContentDataQuery } from "../../redux/firebaseSlice";
import { WebContentItem } from "../../types";

export default function HomePage() {
  const { data } = useFetchWebContentDataQuery();
  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_PROJECT_NAME} - Inicio</title>
      </Helmet>
      {data?.WebSection.Home.map((item: WebContentItem, index: number) => {
        return <LazyComponent key={index} data={item} />;
      })}
    </>
  );
}
