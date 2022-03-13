import {
  AccountAndConfigDiv,
  ConfigDiv,
  AccountDiv,
  ConfigLogoSpan,
  ConfigTextSpan,
  AccountAndConfigIconSpan,
  AccountAvatarSpan,
} from "./styles";
import Image from "next/image";

import Logo from "../../../../public/logo.svg";

type AccountAndConfigProps = {
  isSideBarOpen: boolean;
};

const AccountAndConfig = ({ isSideBarOpen }: AccountAndConfigProps) => (
  <AccountAndConfigDiv isSideBarOpen={isSideBarOpen}>
    <ConfigDiv isSideBarOpen={isSideBarOpen}>
      <ConfigLogoSpan>
        <Logo width="20" height="20" />
      </ConfigLogoSpan>
      <ConfigTextSpan isSideBarOpen={isSideBarOpen}>Cycle</ConfigTextSpan>
      <AccountAndConfigIconSpan isSideBarOpen={isSideBarOpen}>
        <Image src="/icons/selectG.svg" alt="open" width={8} height={5} />
      </AccountAndConfigIconSpan>
    </ConfigDiv>
    <AccountDiv isSideBarOpen={isSideBarOpen}>
      <AccountAvatarSpan>
        <Image src="/avatar.jpg" alt="open" width={18} height={18.75} />
      </AccountAvatarSpan>
      <AccountAndConfigIconSpan isSideBarOpen={isSideBarOpen}>
        <Image src="/icons/selectG.svg" alt="open" width={8} height={5} />
      </AccountAndConfigIconSpan>
    </AccountDiv>
  </AccountAndConfigDiv>
);

export default AccountAndConfig;
