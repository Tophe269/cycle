import { MenuLink, BoardMenu } from "@/types/menu";

const menuLinks: MenuLink[] = [
  { icon: "search", text: "Search", slug: "search", letters: [] },
  {
    icon: "notifications",
    text: "Notifications",
    slug: "notifications",
    letters: [],
  },
  {
    icon: "commands",
    text: "Commands",
    slug: "commands",
    letters: ["cmd", "k"],
  },
  { icon: "create", text: "Create doc", slug: "create-doc", letters: [] },
  { icon: "all-docs", text: "All docs", slug: "all-docs", letters: [] },
];

const boards: BoardMenu[] = [
  {
    title: "Starred",
    slug: "starred",
    links: [
      { icon: "🦊", text: "Feedback 2.0", slug: "feedback-2-0" },
      { icon: "🏆", text: "Roadmap tech", slug: "roadmap-tech" },
      { icon: "🎨", text: "Design", slug: "design" },
      { icon: "🤖", text: "Github feedback", slug: "github-feedback" },
      { icon: "⚛️", text: "Improvements", slug: "improvements" },
      { icon: "🚀", text: "Bugs", slug: "bugs" },
      { icon: "⌛️", text: "Sprint 4", slug: "sprint-4" },
    ],
  },
  {
    title: "Run planning",
    slug: "run-planning",
    links: [
      { icon: "🦊", text: "Stuff 1", slug: "stuff-1" },
      { icon: "🏆", text: "Stuff 2", slug: "stuff-2" },
    ],
  },
  {
    title: "Boards",
    slug: "boards",
    links: [
      { icon: "🦊", text: "Stuff 3", slug: "stuff-3" },
      { icon: "🏆", text: "Stuff 4", slug: "stuff-4" },
    ],
  },
];

export { menuLinks, boards };
