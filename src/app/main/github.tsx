import { useMantineColorScheme } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export default function GitHubIcon() {
    const theme = useMantineColorScheme();

    return (
        <IconBrandGithub aria-label="GitHub Logo" color={theme.colorScheme === "dark" ? "#fff" : "#000"} style={{ top: 1, position: "relative" }} size={22} />
    )
}