import { Button, Flex, Group, Text, Title, useMantineColorScheme } from "@mantine/core";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

export default function Blogs() {
  const theme = useMantineColorScheme();

  const blogs = [
    {
      title: "My Favorite VSCode Extensions",
      description:
        "My favorite extensions inside VSCode that help me stay organized and improve my overall development experience.",
      date: "December 25, 2024",
      readTime: "5 min read"
    }
  ];

  return (
    <>
      <Group py="xs" my="xl">
        <Flex w="100%" justify="space-between">
          <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>
            Blogs
          </Title>

          <Button
            mt="-4px"
            p={0}
            size="sm"
            variant="transparent"
            c={theme.colorScheme === "dark" ? "var(--mantine-text-color)" : "black"}
            classNames={{ section: "rightArrowIcon" }}
            rightSection={<IconArrowRight size={17} />}
          >
            View More Blogs
          </Button>
        </Flex>

        <Flex w="100%" direction="column">
          {blogs.map((blog, index) => (
            <Flex
              key={index}
              p="lg"
              style={{
                border: "1px solid var(--mantine-color-dark-6)",
                borderRadius: "var(--mantine-radius-default)"
              }}
              direction="column"
            >
              <Flex justify="space-between">
                <Text fz="lg" fw={600}>
                  {blog.title}
                </Text>
                <Button
                  mt="-4px"
                  p={0}
                  size="sm"
                  variant="transparent"
                  c={theme.colorScheme === "dark" ? "var(--mantine-text-color)" : "black"}
                  classNames={{ section: "rightArrowIcon" }}
                  rightSection={<IconArrowUpRight style={{ rotate: "15deg" }} size={19} />}
                ></Button>
              </Flex>

              <Text size="xs">
                {blog.date} • {blog.readTime}
              </Text>
              <Text mt="xs" size="sm">
                {blog.description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Group>
    </>
  );
}
