import { DocGroup } from "app/_types/board";

export const designBoard: DocGroup[] = [
  {
    title: "Framing",
    slug: "framing",
    icon: "📐",
    docs: [
      {
        id: "CYC-320",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec leo blandit, malesuada arcu scelerisque, fermentum lectus. Nulla ac accumsan erat.",
        icon: "🦋",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
      {
        id: "CYC-321",
        text: "Aliquam eget felis vulputate, pharetra ex vitae.",
        icon: "🦉",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 5", color: "green" },
        ],
      },
      {
        id: "CYC-322",
        text: "Phasellus id ipsum in massa commodo aliquam vel in lectus.",
        icon: "🌟",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
      {
        id: "CYC-323",
        text: "Suspendisse dapibus metus aliquet lectus ultrices placerat",
        icon: "🌟",
        tags: [
          { text: "Design", color: "blue" },
          {
            text: "New features: Implemente the new doc editor features",
            color: "lightBlue",
          },
        ],
      },
      {
        id: "CYC-324",
        text: "Aliquam elementum arcu velit, ac consequat arcu lobortis sed. Integer non cursus leo, et euismod felis. ",
        icon: "🌟",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
      {
        id: "CYC-325",
        text: "Nam semper eleifend diam. ",
        icon: "🌟",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
    ],
  },
  {
    title: "In Design",
    slug: "in-design",
    icon: "🎨",
    docs: [
      {
        id: "CYC-326",
        text: "Aliquam eget felis vulputate, pharetra ex vitae.",
        icon: "🦋",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
      {
        id: "CYC-327",
        text: "Restibulum pharetra ligula sed dapibus commodo. Aliquam pulvinar posuere condimentum.",
        icon: "🦉",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 5", color: "green" },
        ],
      },
      {
        id: "CYC-328",
        text: "Vestibulum sed massa mollis sem interdum rutrum.",
        icon: "🌟",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
    ],
  },
  {
    title: "In Review",
    slug: "in-review",
    icon: "✏️",
    docs: [
      {
        id: "CYC-329",
        text: "Phasellus id ipsum in massa commodo aliquam vel in lectus.",
        icon: "🦋",
        tags: [
          { text: "Design", color: "blue" },
          { text: "Sprint 4", color: "pink" },
        ],
      },
    ],
  },
  { title: "Backlog", slug: "backlog", icon: "⏰", docs: [] },
];
