import { Button, Flex, Group, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";

export default function Blogs() {
  const theme = useMantineColorScheme();
  const breakpointXS = useMediaQuery(`(min-width: 36em)`)
 
  const blogs = [
    {
      title: "My Favorite VSCode Extensions",
      description:
        "My favorite extensions inside VSCode that help me stay organized and improve my overall development experience.",
      date: "December 25, 2024",
      readTime: "5 min read",
      link: "https://medium.com/@monicaalyssa/my-favorite-vscode-extensions-2ac22713a4de"
    }
  ];

  return (
    <>
      <Group py="xs" my="xl">
        <Flex w="100%" direction={breakpointXS ? "row" : "column"} justify="space-between">
          <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>
            Blogs
          </Title>

          {/* <Button
            mt="-4px"
            p={0}
            justify="left" 
            size="sm"
            variant="transparent"
            c={theme.colorScheme === "dark" ? "var(--mantine-text-color)" : "black"}
            classNames={{ section: "rightArrowIcon" }}
            rightSection={<IconArrowRight size={17} />}
          >
            View More Blogs
          </Button> */}
        </Flex>

        <Flex w="100%" direction="column">
          {blogs.map((blog, index) => (
            <Text component="a" title={blog.title ? `Read "${blog.title}"` : ""} key={index} href={blog.link} target="_blank" className="hover">
              <Flex
                p="lg"
                style={{
                  border: `1px solid ${theme.colorScheme === "dark" ? "var(--mantine-color-dark-6)" : "#dee2e6"}`,
                  borderRadius: "var(--mantine-radius-default)"
                }}
                direction="column"
              >
                <Flex justify="space-between">
                  <Text fz="lg" fw={600}>
                    {blog.title}
                  </Text>
                </Flex>

                <Text size="xs">
                  {blog.date} • {blog.readTime}
                </Text>
                <Text mt="xs" size="sm">
                  {blog.description}
                </Text>
              </Flex>
            </Text>
          ))}
        </Flex>
      </Group>
    </>
  );
}
