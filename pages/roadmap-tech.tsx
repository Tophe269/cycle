import type { NextPage } from "next";
import RoadmapTech from "@/components/roadmapTech";
import Layout from "@/components/common/layout";

const DesignPage: NextPage = () => {
  return (
    <Layout board="roadmap-tech" category="starred">
      <RoadmapTech />
    </Layout>
  );
};

export default DesignPage;
