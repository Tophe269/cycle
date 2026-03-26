import { FC } from "react";
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
import SelectG from "app/_icons/SelectG";
import Logo from "app/_icons/Logo";

type AccountAndConfigProps = {
  isSideBarExtended: boolean;
};

const AccountAndConfig: FC<AccountAndConfigProps> = ({ isSideBarExtended }) => (
  <AccountAndConfigDiv $isSideBarExtended={isSideBarExtended}>
    <ConfigDiv $isSideBarExtended={isSideBarExtended}>
      <ConfigLogoSpan>
        <Logo width="20" height="20" />
      </ConfigLogoSpan>
      <ConfigTextSpan $isSideBarExtended={isSideBarExtended}>
        Cycle
      </ConfigTextSpan>
      <AccountAndConfigIconSpan $isSideBarExtended={isSideBarExtended}>
        <SelectG />
      </AccountAndConfigIconSpan>
    </ConfigDiv>
    <AccountDiv $isSideBarExtended={isSideBarExtended}>
      <AccountAvatarSpan>
        <Image src="/avatar.jpg" alt="open" width={18} height={18.75} />
      </AccountAvatarSpan>
      <AccountAndConfigIconSpan $isSideBarExtended={isSideBarExtended}>
        <SelectG />
      </AccountAndConfigIconSpan>
    </AccountDiv>
  </AccountAndConfigDiv>
);

export default AccountAndConfig;
