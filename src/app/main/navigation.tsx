import { Anchor, Flex } from "@mantine/core";

export default function Navigation() {

    const links = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Projects",
            link: "/projects",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Blog",
            link: "/blog",
        },
        {
            title: "Contact",
            link: "/contact",
        },
    ]
    return (
        <Flex my="xs" justify="end" gap="xs">
            {links.map((link, key) => (
                <Anchor c="var(--text-color)" p="sm" fw={500} href={link.link} key={key}>{link.title}</Anchor>
            ))}
        </Flex>
    )
}