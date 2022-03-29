import React from "react";
import { Stack, Center, Image } from "@mantine/core";

const images = [
  {
    id: 1,
    url: "/images/House.png",
    alt: "House",
  },
  {
    id: 2,
    url: "/images/Bolt.png",
    alt: "Bolt",
  },
  {
    id: 3,
    url: "/images/Envelope.png",
    alt: "Envelope",
  },
  {
    id: 4,
    url: "/images/Trophy.png",
    alt: "Trophy",
  },
  {
    id: 5,
    url: "/images/Cog.png",
    alt: "Cog",
  },
];

const SideMenu = () => {
  return (
    <Stack
      spacing={50}
      align="center"
      justify="center"
      sx={(theme) => ({
        background: `${theme.colors.dark["4"]}`,
        position: "sticky",
        top: 0,
        padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
      })}
    >
      {images.map((image) => (
        <Center>
          <Image src={process.env.PUBLIC_URL + image.url} alt={image.alt} width="70%" />
        </Center>
      ))}
    </Stack>
  );
};

export default SideMenu;
