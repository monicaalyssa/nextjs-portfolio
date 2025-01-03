import { ActionIcon, Button, Flex } from "@mantine/core";
import { IconFileSymlink } from "@tabler/icons-react";
import Link from "next/link";
import { socialLinks } from "../data/socialLinks";

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
      {socialLinks.map((link, index) => (
          <ActionIcon key={index} title={link.title} target="_blank" component="a" href={link.href} variant="transparent">
            {link.icon}
          </ActionIcon>
      ))}
      </Flex>
    </Flex>
  );
}
