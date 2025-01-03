"use client"
import { ActionIcon, Flex, Tooltip, useMantineColorScheme } from "@mantine/core";
import { socialLinks } from "../data/socialLinks";
import classes from "../icons/icon.module.css"

export default function Footer() {
  const theme = useMantineColorScheme();

  return (
    <Flex gap="md" mt="xl" pb={5} justify="center" align="center">
      {socialLinks.map((link, index) => (
        <Tooltip color={theme.colorScheme === "dark" ? "var(--mantine-color-default)" : ""} fz="xs" key={index} withArrow label={link.label}>
          <ActionIcon classNames={{root: classes.actionHover}} target="_blank" component="a" href={link.href} variant="transparent">
            {link.icon}
          </ActionIcon>
        </Tooltip>
      ))}
    </Flex>
  );
}
