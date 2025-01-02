import { ActionIcon, Button, Flex } from "@mantine/core";
import { IconFileSymlink } from "@tabler/icons-react";
import LinkedInIcon from "./linkedin";
import MediumIcon from "./medium";
import GitHubIcon from "./github";
import MailIcon from "./mail";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <Flex align="center" gap="md" mt="xl">
      <Link target="_blank" href="/Monica_Williams_Resume_Web_Developer.pdf">
      <Button
        title="Open resume (external link)"
        classNames={{ section: "resumeIcon" }}
        rightSection={<IconFileSymlink size={15.5} />}
        variant="default"
      >
        Resume
      </Button>
      </Link>

      <Flex gap="xs" align="center">
        <ActionIcon target="_blank" title="View my GitHub" component="a" href="https://github.com/monicaalyssa" variant="transparent">
            <GitHubIcon />
        </ActionIcon>

        <ActionIcon target="_blank" title="View my LinkedIn profile" component="a" href="https://www.linkedin.com/in/monica-alyssa/" variant="transparent">
            <LinkedInIcon />
        </ActionIcon>

        <ActionIcon target="_blank" title="View my Medium blog" component="a" href="https://medium.com/@monicaalyssa" variant="transparent">
            <MediumIcon />
        </ActionIcon>

        <ActionIcon title="Contact me via email" component="a" href="mailto:monicaalyssa.tech@gmail.com"variant="transparent">
            <MailIcon />
        </ActionIcon>
      </Flex>
    </Flex>
  );
}
