import { Avatar, List, ListItem, Text, Timeline } from "@mantine/core";

export default function Work() {

    return (
        <Timeline my="lg" color="var(--mantine-color-default)" active={1} bulletSize={50} lineWidth={2}>
            <Timeline.Item bullet={<Avatar size={51} 
            src="/work_logo.png" />} title="Americas Mortgage Professionals">
            <Text fw={500} size="sm">Web Developer and Marketing Designer</Text>
            <Text c="dimmed" size="sm">Feb 2024 - Present</Text>
            <Text mt="xs" size="sm"></Text>
            
            <List my="xs" size="sm">
                <ListItem classNames={{itemWrapper: "listWrapper"}}>Design and develop a new, user-friendly, responsive company website with React, Vite, and TypeScript to better support the company&apos;s goals of expanding partnerships and attracting new talent.</ListItem>
                <ListItem classNames={{itemWrapper: "listWrapper"}}>Create flyers for real estate agents to promote property listings and loan programs, strengthening realtor partnerships.</ListItem>
            </List>

            </Timeline.Item>
        </Timeline>
    )
}