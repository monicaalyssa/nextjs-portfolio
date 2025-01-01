"use client"
import { Anchor, Flex, useComputedColorScheme, useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Navigation() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
    const [mounted, setMounted] = useState(false)

    const links = [
        {
            title: "home",
            link: "/",
        },
        {
            title: "projects",
            link: "/projects",
        },
        {
            title: "about",
            link: "/about",
        },
        {
            title: "blog",
            link: "/blog",
        },
        {
            title: "contact",
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
        <Flex align="center" gap="xs">
            {links.map((link, key) => (
                <Anchor classNames={{root: 'nav'}} size="sm" p="sm" fw={500} href={link.link} key={key}>{link.title}</Anchor>
            ))}
        </Flex>
        <ActionIcon title={computedColorScheme === 'dark' ? "Switch to light mode" : "Switch to dark mode"} aria-label={computedColorScheme === 'dark' ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')} color="#c9c9c9" variant="subtle">
            {computedColorScheme === 'dark' ? <IconSun color="#fcc419" size={18}></IconSun> : <IconMoonStars color="#364fc7" size={18}></IconMoonStars>}
        </ActionIcon>
        </Flex>
        </>
    )
}