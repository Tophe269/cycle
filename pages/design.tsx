import type { NextPage } from "next";
import Design from "../src/components/design";
import Layout from "../src/components/common/layout";

const DesignPage: NextPage = () => {
  return (
    <Layout currentPage="design" title="Design">
      <Design />
    </Layout>
  );
};

export default DesignPage;
