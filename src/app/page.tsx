"use client"
import { Anchor, Avatar, Box, Container, Divider, Flex, Text, Title, useMantineColorScheme } from "@mantine/core";
import PortraitImg from "../../public/Portrait.jpg"
import classes from "./page.module.css"
import { useEffect, useState } from "react";
import SocialLinks from "./main/socials";
import Tabs from "./main/tabs";
import Skills from "./main/skills";

export default function Home() {
  const theme = useMantineColorScheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
      setMounted(true);
  }, []);

  if (!mounted) {
    return (
    <Container>
      <Flex h="80vh" align="center" justify="center">
      </Flex>
    </Container>
  )}

  return (
    <>
      <Box py="lg" my="xl">
      <Flex align="center" gap="md">
      <Avatar component="a" target="_blank" href="https://www.linkedin.com/in/monica-alyssa/" size={60} src={PortraitImg.src} alt="Portrait of Monica Williams"></Avatar>
      <Flex direction="column" gap={0}>
      <Title c={theme.colorScheme === 'dark' ? 'white' : 'black'} order={2} >Hello, I&apos;m Monica. 👋</Title>
      <Text fw={500} className={classes.devTitle}>Full-Stack Developer</Text>
      </Flex>
      </Flex>
      <Text mt="md">I&apos;m a full-stack web developer based in <Anchor c={theme.colorScheme === 'dark' ? 'white' : 'black'} href="https://maps.app.goo.gl/bVj7rcHZSk8sdB7d6" target="_blank">Fort Lauderdale, Florida</Anchor>, with a curiosity for coding that began at a young age. I specialize in building user-friendly applications with precision and am committed to <Text fs="italic" span>expanding</Text>  my knowledge to stay up to date with the latest developer trends.</Text>
      {/* <Text mt="sm">I&apos;m a full-stack web developer based in <Anchor c="white" href="https://maps.app.goo.gl/bVj7rcHZSk8sdB7d6" target="_blank">Fort Lauderdale, Florida</Anchor>, with a curiosity for coding that began at a young age. Starting as self-taught, followed by high school courses, and finally obtaining a certification in development, I have built a strong foundation in both front and backend technologies. I am committed to applying my skills and <Text fs="italic" c="white" span>expanding</Text> my knowledge to stay up to date with the latest developer trends.</Text> */}
      <SocialLinks></SocialLinks>
      <Tabs />
      
      <Skills />
      </Box>
    </>
  );
}
