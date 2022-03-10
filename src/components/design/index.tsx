import Design from "./Design";

import { designBoard } from "../../constants/design-data";

import { DocGroup } from "../../types/board";

export type DesignProps = { board: DocGroup[] };

const DesignContainer = () => <Design board={designBoard} />;

export default DesignContainer;
