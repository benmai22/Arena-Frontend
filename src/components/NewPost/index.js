import { Transition, Paper, Text, Stack, Grid, Avatar, Button, Textarea } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

const NewPost = ({ opened, setOpened }) => {
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            shadow="md"
            style={{
              ...styles,
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              height: 150,
              width: "90%",
            }}
            ref={clickOutsideRef}
          >
            <Stack
              sx={(theme) => ({
                background: theme.colors.dark[3],
                padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
              })}
              align="center"
            >
              <Grid sx={{ width: "100%" }}>
                <Grid.Col span={1}>
                  <Avatar size={50} />
                </Grid.Col>
                <Grid.Col span={11}>
                  <Textarea>What's going on</Textarea>
                </Grid.Col>
              </Grid>
              <Button>Post</Button>
            </Stack>
          </Paper>
        )}
      </Transition>
    </div>
  );
};
export default NewPost;
