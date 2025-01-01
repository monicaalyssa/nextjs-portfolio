"use client"
import styles from "./page.module.css";
import { Button, Text, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

export default function Home() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <div className={styles.page}>
      <Button variant="default" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>Toggle</Button>
      <Text>Hello Main Page</Text>
      <Button>Button</Button>
    </div>
  );
}
