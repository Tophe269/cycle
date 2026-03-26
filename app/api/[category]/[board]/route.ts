import { designBoard } from "app/_constants/design-data";
import { roadmapTechBoard } from "app/_constants/roadmap-tech-data";

type RouteContext = {
  params: Promise<{
    category: string;
    board: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { category, board } = await params;
  const data = board === "roadmap-tech" ? roadmapTechBoard : designBoard;

  return Response.json({
    category,
    board,
    data,
  });
}
