import { Stack, ActionIcon, Grid, Input } from "@mantine/core";
import { IoMdAdd, IoMdAt } from "react-icons/io";

const SideAction = ({ setOpened }) => {
  return (
    <Stack
      align="center"
      sx={(theme) => ({
        position: "sticky",
        background: `${theme.colors.dark["4"]}`,
        top: 0,
        padding: `${theme.spacing.md}px ${theme.spacing.sm}px`,
      })}
      spacing={15}
    >
      <Grid justify="space-between">
        <Grid.Col span={6}>
          <ActionIcon
            variant="filled"
            size={50}
            sx={{ borderRadius: 50 }}
            onClick={() => setOpened(true)}
          >
            <IoMdAdd size={20} />
          </ActionIcon>
        </Grid.Col>
        <Grid.Col span={6}>
          <ActionIcon variant="filled" size={50} sx={{ borderRadius: 50 }}>
            <IoMdAt size={20} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
      <Input placeholder="Search... " type="text" width="100%" />
    </Stack>
  );
};

export default SideAction;
