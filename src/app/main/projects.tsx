import { Text, Image, Grid, Button, Flex, useMantineColorScheme, Title, Box, Group } from "@mantine/core";
import { IconArrowRight, IconBrandGithub, IconWorldWww } from "@tabler/icons-react";

export default function Projects() {
  // dim hover & scale
  // whole button will link to separate page, but inside will have 2 buttons

  const theme = useMantineColorScheme();

  const projects = [
    {
      name: "PopcornPal",
      favicon: "/popcornpal-logo.png",
      description:
        "PopcornPal is a full-stack web application that features a user-friendly platform that showcases detailed information about films and allows users to create accounts and favorite films.",
      img: "/pp.png",
      sourceCode: "/",
      liveSite: "/",
      techStack: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      name: "Pokédex",
      favicon: "https://monicaalyssa.github.io/pokedex/images/pokemon-icon.svg",
      description: "A JavaScript web application that fetches data from a Pokémon API to display a list of Pokémon with images and details.",
      img: "https://placehold.co/200x100",
      sourceCode: "/",
      liveSite: "/",
      techStack: ["JavaScript", "RESTful API", "Bootstrap"]
    },
    {
      name: "Mortgage Lender",
      description:
        "A local mortgage lender that offers various loan options and attracts potential leads and partners through interactive tools and resources.",
      img: "https://placehold.co/200x100",
      techStack: ["React", "Mantine", "Vite"]
    },
    {
        name: "Meet",
        description: "Meet is a Progressive Web App (PWA) with offline functionality that allows users to search for upcoming events near their city. It includes interactive charts to visualize key event data.",
        img: "https://placehold.co/200x100",
        sourceCode: "/",
        liveSite: "/",
        techStack: ["React", "AWS", "OAuth (Open Authorization)"]
      },
  ];

  return (
    <Group py="xs" my="xl">
    <Flex w="100%" justify="space-between">
       
    <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>Featured Projects</Title>
  
    <Button mt="-4px" p={0} size="sm" variant="transparent" c={theme.colorScheme === "dark" ? "var(--mantine-text-color)" : "black"} classNames={{ section: "rightArrowIcon" }} rightSection={<IconArrowRight size={17} />}>View More Projects</Button>
    
    </Flex>
    <Grid py="sm">
      {projects.map((project, index) => (
        <Grid.Col key={index} span={6}>
          <Flex direction="column" p={0} align="flex-start">
            <div>
              <Image
                alt="test"
                style={{
                  borderRadius: "var(--mantine-radius-default)",
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                  height: "200px",
                  maxHeight: "200px"
                }}
                src={project.img}
              ></Image>
            </div>
            <Flex
              p="lg"
              pt="sm"
              style={{
                border: "1px solid var(--mantine-color-dark-6)",
                borderRadius: "var(--mantine-radius-default)",
                borderTop: "none",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                height: "211.883px"
              }}
              direction="column"
            >
              <Flex align="center" pb={6} justify="space-between">
                <Flex gap={9} align="center">
                  {project.favicon ? <Image alt="" w={25} src={project.favicon}></Image> : null}

                  <Text fz="lg" fw={600}>
                    {project.name}
                  </Text>
                </Flex>
              </Flex>
              <Flex mt={5} mb="xs" align="center" gap={5}>
                {project.techStack.map((technology, index) => (
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
              <Text style={{
                height: "67.1875px",
                maxHeight: "67.1875px",
              }} size="xs">{project.description}</Text>

              <Flex direction="row" gap="xs" mt="lg" align="flex-start">
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
        </Grid.Col>
      ))}
    </Grid>
    </ Group>
  );
}
