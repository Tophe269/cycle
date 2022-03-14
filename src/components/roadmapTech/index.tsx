import RoadmapTech from "./RoadmapTech";

import { roadmapTechBoard } from "@/constants/roadmap-tech-data";

import { DocGroup } from "@/types/board";

export type RoadmapTechProps = { board: DocGroup[] };

const RoadmapTechContainer = () => <RoadmapTech board={roadmapTechBoard} />;

export default RoadmapTechContainer;
