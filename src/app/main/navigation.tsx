"use client"
import { Anchor, Flex, useComputedColorScheme, useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Navigation() {
    const { setColorScheme } = useMantineColorScheme();
    const theme = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
    const [mounted, setMounted] = useState(false)

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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
        <Flex justify="space-between" align="center" my="xs">
        <ActionIcon onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')} variant="default">
            {computedColorScheme === 'dark' ? <IconSun size={18}></IconSun> : <IconMoonStars size={18}></IconMoonStars>}
        </ActionIcon>
        <Flex align="center" gap="xs">
            {links.map((link, key) => (
                <Anchor size="sm" c="var(--text-color)" p="sm" fw={500} href={link.link} key={key}>{link.title}</Anchor>
            ))}
        </Flex>
        </Flex>
        </>
    )
}