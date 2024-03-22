import { Helmet } from "react-helmet";
// import Section from "../../components/Section";
// import DummyData from "../../DummyData";
import LazyComponent from "../../components/LazyComponent";
import { useFetchWebContentDataQuery } from "../../redux/firebaseSlice";
import { WebContentItem } from "../../types";
import NotFound from "../../components/NotFound";

export default function AboutPage() {
  const { data } = useFetchWebContentDataQuery();
  return (
    <>
      <Helmet>
        <title>Ductiline - Nosotros</title>
      </Helmet>
      {data?.WebSection.Nosotros ? (
        data?.WebSection.Nosotros.map((item: WebContentItem, index: number) => {
          return <LazyComponent key={index} data={item} />;
        })
      ) : (
        <NotFound />
      )}
    </>
  );
}
