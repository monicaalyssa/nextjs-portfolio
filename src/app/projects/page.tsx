"use client";

import { Button, Flex, Image, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import Footer from "../main/footer";
import { useMediaQuery } from "@mantine/hooks";

export default function Projects() {
  const theme = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);
  const breakpoint = useMediaQuery(`(min-width: 48em)`)

  const reorderedProjects = [
    projects[0], 
    projects[2],
    projects[3],
    projects[1],
    projects[5],
    projects[4],
  ];

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
      <Text mt={5}>All projects were designed and developed by me.</Text>
      <Flex gap="lg" direction="column" my="xl">
        {reorderedProjects.map((project, index) => (
          <Flex
            style={{
              border: `1px solid ${theme.colorScheme === "dark" ? "var(--mantine-color-dark-6)" : "#dee2e6"}`,
              borderRadius: "var(--mantine-radius-default)",
              overflow: "hidden",
              height: `${breakpoint ? "181.289px" : ""}`,
            }}
            direction="row"
            key={index}
            p={0}
          >

            <Flex p="lg" gap="lg" direction= {breakpoint ? "row" : "column"}>
            <Image
                alt="test"
                style={{
                  width: `${breakpoint ? "250px" : "100%"}`,
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
                    component="a"
                    target="_blank"
                    href={project.sourceCode}
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
                    component="a"
                    target="_blank"
                    href={project.liveSite}
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
