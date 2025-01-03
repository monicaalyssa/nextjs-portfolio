"use client"
import { ActionIcon, Flex, Tooltip, useMantineColorScheme } from "@mantine/core";
import GitHubIcon from "./github";
import LinkedInIcon from "./linkedin";
import MediumIcon from "./medium";
import MailIcon from "./mail";

export default function Footer() {
  const theme = useMantineColorScheme();
  const socialLinks = [
    {
      label: "GitHub",
      icon: <GitHubIcon />,
      href: "https://github.com/monicaalyssa"
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/monica-alyssa/"
    },
    {
      label: "Medium",
      icon: <MediumIcon />,
      href: "https://medium.com/@monicaalyssa"
    },
    {
      label: "Email",
      icon: <MailIcon />,
      href: "mailto:monicaalyssa.tech@gmail.com"
    }
  ];

  return (
    <Flex gap="xs" mt="xl" pb={5} justify="center" align="center">
      {socialLinks.map((link, index) => (
        <Tooltip color={theme.colorScheme === "dark" ? "var(--mantine-color-default)" : ""} fz="xs" key={index} withArrow label={link.label}>
          <ActionIcon target="_blank" component="a" href={link.href} variant="transparent">
            {link.icon}
          </ActionIcon>
        </Tooltip>
      ))}
    </Flex>
  );
}
