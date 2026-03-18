import "styled-components";
import theme from "@/constants/theme";

type NavTheme = typeof theme.nav;
type ContentTheme = typeof theme.content;

declare module "styled-components" {
  export interface DefaultTheme extends Partial<NavTheme>, Partial<ContentTheme> {}
}
