import type { NextPage } from "next";
import Head from "next/head";
import Design from "../src/components/design";
import Layout from "../src/components/common/layout";

const DesignPage: NextPage = () => {
  return (
    <div>
      <Layout menuItem="design" title="Design">
        <Design />
      </Layout>
    </div>
  );
};

export default DesignPage;
