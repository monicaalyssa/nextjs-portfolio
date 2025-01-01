"use client"
import { Anchor, Flex, Button, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

export default function Navigation() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

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
        <>
        <Flex justify="space-between" align="center" my="xs">
        <Button variant="default" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}>Toggle</Button>
        <Flex align="center" gap="xs">
            {links.map((link, key) => (
                <Anchor c="var(--text-color)" p="sm" fw={500} href={link.link} key={key}>{link.title}</Anchor>
            ))}
        </Flex>
        </Flex>
        </>
    )
}