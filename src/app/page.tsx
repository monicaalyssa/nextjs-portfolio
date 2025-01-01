"use client"
import { Anchor, Avatar, Flex, Text, Title, Button, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import PortraitImg from "../../public/Portrait.jpg"
import classes from "./page.module.css"

export default function Home() {
  // const { setColorScheme } = useMantineColorScheme();
  // const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <>
      {/* <Button variant="default" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>Toggle</Button> */}
      <Flex align="center" gap="md">
      <Avatar component="a" target="_blank" href="https://www.linkedin.com/in/monica-alyssa/" size={60} src={PortraitImg.src} alt="Portrait of Monica Williams"></Avatar>
      <Flex direction="column" gap={0}>
      <Title c="white" order={2} >Hello, I&apos;m Monica. 👋</Title>
      <Text fw={500} className={classes.devTitle}>Full-Stack Developer</Text>
      </Flex>
      </Flex>
      <Text>I&apos;m a full-stack web developer based in <Anchor c="white" href="https://maps.app.goo.gl/bVj7rcHZSk8sdB7d6" target="_blank">Fort Lauderdale, Florida</Anchor>, with a curiosity for coding that began at a young age. Starting as self-taught, followed by high school courses, and finally obtaining a certification in development, I have built a strong foundation in both front and backend technologies. I am committed to applying my skills and <Text fs="italic" c="white" span>expanding</Text> my knowledge to stay up to date with the latest developer trends.</Text>
    </>
  );
}
