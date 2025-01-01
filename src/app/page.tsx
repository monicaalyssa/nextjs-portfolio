"use client"
import { Button, Title, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

export default function Home() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <>
      <Button variant="default" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>Toggle</Button>
      <Title>Hello, I&apos;m Monica. 👋</Title>
    </>
  );
}
