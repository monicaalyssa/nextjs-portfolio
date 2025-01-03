"use client";

import { Title, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Blog() {
  const theme = useMantineColorScheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>
      Blog
    </Title>
  );
}
