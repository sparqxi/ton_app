import PoolsPage from "./pools";
import ClaimPage from "./claim";
import { PagesList } from "../components/header/hader-swith";
import { usePageContext } from "../hooks/usePageContext";

type Props = {};

const Page = (props: Props) => {
  const { page } = usePageContext();
  return <>{page === "pools" ? <PoolsPage /> : <ClaimPage />}</>;
};

export default Page;
