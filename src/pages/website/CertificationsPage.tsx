import { Helmet } from "react-helmet";
import LazyComponent from "../../components/LazyComponent";
import { useFetchWebContentDataQuery } from "../../redux/firebaseSlice";
import NotFound from "../../components/NotFound";
import { WebContentItem } from "../../types";

export default function CertificationsPage() {
  const { data } = useFetchWebContentDataQuery();
  return (
    <>
      <Helmet>
        <title>Ductiline - Certificaciones</title>
      </Helmet>
      {data?.WebSection.Certificaciones ? (
        data?.WebSection.Certificaciones.map(
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
