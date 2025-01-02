import { Avatar, Button, List, ListItem, Text, Timeline } from "@mantine/core";
import Link from "next/link";

export default function Education() {

    return (
        <Timeline my="lg" color="var(--mantine-color-default)" active={1} bulletSize={50} lineWidth={2}>
            <Timeline.Item bullet={<Avatar size={51} 
            src="/education_logo.png" />} title="CareerFoundry">
            <Text fw={500} size="sm">Full-Stack Development Certificate</Text>
            <Text c="dimmed" size="sm">Dec 2023 - Dec 2024</Text>
            <Text mt="xs" size="sm">Intensive, project-based online training program focused on front-end 
            and back-end web development. Coursework includes:</Text>
            
            <List my="xs" size="sm">
                <ListItem classNames={{itemWrapper: "listWrapper"}}>Frontend: JavaScript, React, HTML/CSS, React Native, Progressive Web Apps</ListItem>
                <ListItem classNames={{itemWrapper: "listWrapper"}}>Backend: Node.js, Express, REST APIs, Authentication, MongoDB, Firebase, PostgreSQL, AWS</ListItem>
                <ListItem classNames={{itemWrapper: "listWrapper"}}>Testing: Jest, Test-Driven Development, Puppeteer, Cucumber</ListItem>
            </List>
            <Link target="_blank" href="/Certificate.pdf">
            <Button aria-label="View CareerFoundry Certificate" variant="default" size="compact-xs">View Certificate</Button>
            </Link>
            </Timeline.Item>
        </Timeline>
    )
}