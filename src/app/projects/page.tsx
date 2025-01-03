"use client";

import { Button, Flex, Image, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import Footer from "../main/footer";

export default function Projects() {
  const theme = useMantineColorScheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>
        Projects
      </Title>
      <Flex gap="lg" direction="column" my="xl">
        {projects.map((project, index) => (
          <Flex
            style={{
              border: "1px solid var(--mantine-color-dark-6)",
              borderRadius: "var(--mantine-radius-default)",
              overflow: "hidden",
              height: "181.289px",
              maxHeight: "181.289px",
            }}
            direction="row"
            key={index}
            p={0}
          >


            <Flex p="lg" gap="lg" direction="row">
            <Image
                alt="test"
                style={{
                  width: "250px",
                  height: "100%",
                  borderRadius: "var(--mantine-radius-default)",
                }}
                src={project.img}
              ></Image>
              <Flex direction="column">
              <Flex align="center" pb={6} justify="space-between">
                <Flex gap={9} align="center">
                  {project.favicon ? <Image alt="" w={25} src={project.favicon}></Image> : null}

                  <Text fz="lg" fw={600}>
                    {project.name}
                  </Text>
                </Flex>
              </Flex>
              <Flex mt={5} mb="xs" align="center" gap={5}>
                {project.techStack2.map((technology, index) => (
                  <Flex
                    key={index}
                    px={10}
                    py={2}
                    style={{ borderRadius: 100, backgroundColor: "rgba(16, 152, 173, 0.1)" }}
                    align="center"
                    justify="center"
                  >
                    <Text c="#1098ad" size="xs">
                      {technology}
                    </Text>
                  </Flex>
                ))}
              </Flex>
              <Text size="xs">{project.description2}</Text>

              <Flex direction="row" gap="xs" mt="md" align="flex-start">
                {project.sourceCode ? (
                  <Button
                    c="var(--mantine-text-color)"
                    variant="default"
                    size="compact-xs"
                    classNames={{ section: "rightGitHub" }}
                    rightSection={<IconBrandGithub size={12} />}
                  >
                    Source Code
                  </Button>
                ) : null}

                {project.liveSite ? (
                  <Button
                    c="var(--mantine-text-color)"
                    variant="default"
                    size="compact-xs"
                    classNames={{ section: "rightWWW" }}
                    rightSection={<IconWorldWww size={12} />}
                  >
                    Live Site
                  </Button>
                ) : null}
              </Flex>
            </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Footer />
    </>
  );
}
