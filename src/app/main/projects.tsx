import { Text, Image, Grid, Button, Flex, useMantineColorScheme, Title, Group } from "@mantine/core";
import { IconArrowRight, IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import { projects } from "../data/projects";
import { useMediaQuery } from "@mantine/hooks";

export default function Projects() {
  // dim hover & scale
  // whole button will link to separate page, but inside will have 2 buttons

  const breakpoint = useMediaQuery(`(min-width: 48em)`)
  const breakpointXS = useMediaQuery(`(min-width: 36em)`)
  const theme = useMantineColorScheme();

  return (
    <Group my="xl">
    <Flex w="100%" direction={breakpointXS ? "row" : "column"} justify="space-between">
       
    <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>Featured Projects</Title>
  
    <Button mt="-4px" p={0} size="sm"
    justify="left" 
    component="a" href="/projects" variant="transparent" 
    c={theme.colorScheme === "dark" ? "var(--mantine-text-color)" : "black"} 
    classNames={{ section: "rightArrowIcon" }} rightSection={<IconArrowRight size={17} />}>
    View More Projects</Button>
    
    </Flex>
    <Grid py="sm">
      {projects.slice(0, 4).map((project, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
          <Flex direction="column" p={0} align="flex-start">
            <div style={{width: "100%"}}>
              <Image
                alt="test"
                style={{
                  borderRadius: "var(--mantine-radius-default)",
                  borderBottomLeftRadius: "0",
                  borderBottomRightRadius: "0",
                  width: "100%",
                  maxWidth: "100%"
                }}
                src={project.img}
              ></Image>
            </div>
            <Flex
              p="lg"
              
              pt="sm"
              style={{
                border: `1px solid ${theme.colorScheme === "dark" ? "var(--mantine-color-dark-6)" : "#dee2e6"}`,
                borderRadius: "var(--mantine-radius-default)",
                borderTop: "0",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                height: `${breakpoint ? "211.883px" : ""}`
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
                    wrap="wrap"
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
                
                height: `${breakpoint ? "67.1875px" : ""}`,
              }} size="xs">{project.description}</Text>

              <Flex direction="row" gap="xs" mt="lg" align="flex-start">
                {project.sourceCode ? (
                  <Button
                    c="var(--mantine-text-color)"
                    variant="default"
                    component="a"
                    target="_blank"
                    href={project.sourceCode}
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
        </Grid.Col>
      ))}
    </Grid>
    </ Group>
  );
}
