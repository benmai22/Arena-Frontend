import { Stack } from "@mantine/core";
import React from "react";
import NewPost from "../NewPost";
import Post from "../Post";

const data = [
  {
    id: 1,
    post: "This Kansas game is going bananas",
  },
  {
    id: 2,
    post: "Why is Miami blowing the game",
  },
  {
    id: 3,
    post: "This is the items thread",
  },
  {
    id: 4,
    post: "Make it so",
  },
  {
    id: 1,
    post: "This Kansas game is going bananas",
  },
  {
    id: 2,
    post: "Why is Miami blowing the game",
  },
  {
    id: 3,
    post: "This is the items thread",
  },
  {
    id: 4,
    post: "Make it so",
  },
  {
    id: 1,
    post: "This Kansas game is going bananas",
  },
  {
    id: 2,
    post: "Why is Miami blowing the game",
  },
  {
    id: 3,
    post: "This is the items thread",
  },
  {
    id: 4,
    post: "Make it so",
  },
];

const MainContainer = ({ opened, setOpened }) => {
  return (
    <>
      <NewPost opened={opened} setOpened={setOpened} />
      <Stack
        sx={(theme) => ({
          background: `${theme.colors.dark["6"]}`,
          padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
        })}
      >
        <Stack>
          {data.map((item) => {
            return <Post key={item.id} post={item.post} />;
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default MainContainer;
