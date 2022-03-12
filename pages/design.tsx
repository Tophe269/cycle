import type { NextPage } from "next";
import Design from "@/components/design";
import Layout from "@/components/common/layout";

const DesignPage: NextPage = () => {
  return (
    <Layout board="design" category="starred">
      <Design />
    </Layout>
  );
};

export default DesignPage;
