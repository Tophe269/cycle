import { findTitleAndIcon } from "../helpers";
import { boards } from "app/_constants/menu";

describe("layout helpers", () => {
  it("should find icon and title for a board", () => {
    expect(
      findTitleAndIcon({
        boards: boards,
        category: "starred",
        board: "design",
      }),
    ).toEqual({ icon: "🎨", text: "Design", slug: "design" });
  });
  it("should return empty board content if it can't the board", () => {
    expect(
      findTitleAndIcon({
        boards: boards,
        category: "none",
        board: "design",
      }),
    ).toEqual({
      icon: "",
      slug: "",
      text: "",
    });
  });
});
