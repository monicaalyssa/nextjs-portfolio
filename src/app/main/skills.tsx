import { Flex, Image, Text } from "@mantine/core";

export default function Skills() {

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
      src: "/jest.svg",
      alt: "Jest"
    },
    {
      src: "/figma.svg",
      alt: "Figma"
    },
    {
      src: "/trello.svg",
      alt: "Trello"
    }
  ];

//   <Paper bg={theme.colorScheme === "dark" ? "var(--mantine-color-dark-8)" : "white"} 
//   radius="md" style={{border: theme.colorScheme === "dark" ? "1px solid var(--mantine-color-default)" : "1px solid var(--mantine-color-gray-2)", boxShadow: "inset 0px 0px 35px -5px rgba(201, 201, 201, 0.1)"}} p="xl" my="xl">
//     <Title ta="center" c={theme.colorScheme === "dark" ? "white" : "black"} order={3}>
//       Skills
//     </Title>
//     <Flex px="15%" wrap="wrap" justify="center" my="lg" gap="lg">
//     </Flex>
//   </Paper>

  return (
      <Flex wrap="wrap" justify="center" my="lg" gap="lg">
        {logos.map((skill, index) => (
            // <Tooltip key={index} color={theme.colorScheme === "dark" ? "var(--mantine-color-default)" : ""} transitionProps={{ transition: 'pop', duration: 300 }} arrowSize={6} withArrow label={skill.alt}>
              <Flex my={7} key={index} gap={8} direction="column" align="center" justify="center">
              <Image alt={skill.alt} aria-label={skill.alt} w={35} src={skill.src}></Image>
              <Text size="xs">{skill.alt}</Text>
              </Flex>
        ))}
      </Flex>

  );
}
