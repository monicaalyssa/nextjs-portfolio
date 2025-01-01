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
        <ActionIcon title="View my GitHub" component="a" href="#" variant="transparent">
            <GitHubIcon />
        </ActionIcon>

        <ActionIcon title="View my LinkedIn profile" component="a" href="#" variant="transparent">
            <LinkedInIcon />
        </ActionIcon>

        <ActionIcon title="View my Medium blog" component="a" href="#" variant="transparent">
            <MediumIcon />
        </ActionIcon>

        <ActionIcon title="Contact me via email" component="a" href="#"variant="transparent">
            <MailIcon />
        </ActionIcon>
      </Flex>
    </Flex>
  );
}
