import { Box, Flex, Image, Title, Tooltip, useMantineColorScheme } from "@mantine/core";

export default function Skills() {
  const theme = useMantineColorScheme();

  const logos = [
    {
      src: "/javascript.svg",
      alt: "JavaScript"
    },
    {
        src: "/html.svg",
        alt: "HTML5"
      },
    {
      src: "/react.svg",
      alt: "React"
    },
    {
      src: "/mongodb.svg",
      alt: "MongoDB"
    },
    {
        src: "/css.svg",
        alt: "CSS3"
    },
    {
      src: "/git.svg",
      alt: "Git"
    },
    {
      src: "/postgresql.svg",
      alt: "PostgreSQL"
    },
    {
      src: "/postman.svg",
      alt: "Postman"
    },
    {
      src: "/Jest.svg",
      alt: "Jest"
    },
    {
      src: "/Figma.svg",
      alt: "Figma"
    },
    {
      src: "/Trello.svg",
      alt: "Trello"
    }
  ];

  return (
    <Box my="xl">
      <Title ta="center" c={theme.colorScheme === "dark" ? "white" : "black"} order={3}>
        Skills
      </Title>
      <Flex justify="center" my="lg" gap="lg">
        {logos.map((skill, index) => (
          <>
            <Tooltip  key={index} color={theme.colorScheme === "dark" ? "var(--mantine-color-default)" : ""} transitionProps={{ transition: 'pop', duration: 300 }} arrowSize={6} withArrow label={skill.alt}>
              <Image alt={skill.alt} aria-label={skill.alt} w={35} src={skill.src}></Image>
            </Tooltip>
          </>
        ))}
      </Flex>
    </Box>
  );
}
