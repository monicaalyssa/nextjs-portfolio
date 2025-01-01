import { ActionIcon, Button, Flex } from "@mantine/core";
import { IconFileSymlink } from "@tabler/icons-react";
import LinkedInIcon from "./linkedin";
import MediumIcon from "./medium";
import GitHubIcon from "./github";
import MailIcon from "./mail";

export default function SocialLinks() {
  return (
    <Flex align="center" gap="md" mt="xl">
      <Button
        title="Open resume (external link)"
        classNames={{ section: "resumeIcon" }}
        rightSection={<IconFileSymlink size={15.5} />}
        variant="default"
      >
        Resume
      </Button>

      <Flex gap="xs" align="center">
        <ActionIcon variant="transparent">
            <GitHubIcon />
        </ActionIcon>

        <ActionIcon variant="transparent">
            <LinkedInIcon />
        </ActionIcon>

        <ActionIcon variant="transparent">
            <MediumIcon />
        </ActionIcon>

        <ActionIcon variant="transparent">
            <MailIcon />
        </ActionIcon>
      </Flex>
    </Flex>
  );
}
