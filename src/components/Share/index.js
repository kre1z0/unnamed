import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import { ShareContainer } from "./styled";

const socials = [
  {
    quote: "facebook",
    Button: FacebookShareButton,
    Icon: FacebookIcon,
  },
  {
    name: "telegram",
    Button: TelegramShareButton,
    Icon: TelegramIcon,
  },
  {
    name: "viber",
    Button: ViberShareButton,
    Icon: ViberIcon,
  },
  {
    name: "vk",
    Button: VKShareButton,
    Icon: VKIcon,
  },
  {
    name: "ok",
    Button: OKShareButton,
    Icon: OKIcon,
  },
  {
    name: "whatsapp",
    Button: WhatsappShareButton,
    Icon: WhatsappIcon,
  },
  {
    name: "twitter",
    Button: TwitterShareButton,
    Icon: TwitterIcon,
  },
];

export const Share = ({ url, twitterHandle }) => {
  return (
    <ShareContainer>
      {socials.map(({ name, quote, Button, Icon }) => (
        <Button
          key={name || quote}
          url={url}
          title={name}
          quote={quote}
          via={name === "twitter" ? twitterHandle.split("@").join("") : null}
        >
          <Icon size={32} />
        </Button>
      ))}
    </ShareContainer>
  );
};
