import { Grid, Avatar, Text } from "@mantine/core";
import React from "react";

const Post = ({ post }) => {
  return (
    <Grid sx={{ padding: 10 }} align="center">
      <Grid.Col span={1}>
        <Avatar size={50} sx={{ borderRadius: 50 }} />
      </Grid.Col>
      <Grid.Col span={11}>
        <Text color="dimmed">{post}</Text>
      </Grid.Col>
    </Grid>
  );
};

export default Post;
