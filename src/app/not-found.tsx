"use client";

import { Button, Container, Flex, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Container>
      <Flex h="80vh" align="center" justify="center">
        <Flex direction="column" align="center">
          <Title>404 Not Found</Title>
          <Text>Whoops! This page does not exist.</Text>
          <Button
            classNames={{ section: "arrowIcon" }}
            leftSection={<IconArrowLeft size={15.5}></IconArrowLeft>}
            mt="xl"
            variant="default"
            component="a"
            href="/"
          >
            Back to Home
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
