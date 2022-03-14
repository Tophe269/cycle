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
  isSideBarExtended: boolean;
};

const AccountAndConfig = ({
  isSideBarExtended,
}: AccountAndConfigProps): JSX.Element => (
  <AccountAndConfigDiv isSideBarExtended={isSideBarExtended}>
    <ConfigDiv isSideBarExtended={isSideBarExtended}>
      <ConfigLogoSpan>
        <Logo width="20" height="20" />
      </ConfigLogoSpan>
      <ConfigTextSpan isSideBarExtended={isSideBarExtended}>
        Cycle
      </ConfigTextSpan>
      <AccountAndConfigIconSpan isSideBarExtended={isSideBarExtended}>
        <Image src="/icons/selectG.svg" alt="open" width={8} height={5} />
      </AccountAndConfigIconSpan>
    </ConfigDiv>
    <AccountDiv isSideBarExtended={isSideBarExtended}>
      <AccountAvatarSpan>
        <Image src="/avatar.jpg" alt="open" width={18} height={18.75} />
      </AccountAvatarSpan>
      <AccountAndConfigIconSpan isSideBarExtended={isSideBarExtended}>
        <Image src="/icons/selectG.svg" alt="open" width={8} height={5} />
      </AccountAndConfigIconSpan>
    </AccountDiv>
  </AccountAndConfigDiv>
);

export default AccountAndConfig;
