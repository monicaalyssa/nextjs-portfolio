import { Avatar, Button, List, ListItem, Text, Timeline } from "@mantine/core";
import Link from "next/link";

export default function Education() {

    return (
        <Timeline my="lg" color="var(--mantine-color-default)" active={1} bulletSize={50} lineWidth={2}>
            <Timeline.Item bullet={<Avatar size={51} 
            src="https://yt3.googleusercontent.com/IRgDpgFolu8eHLU9ElcWkaY1TA7mNPGQUV05TCLRKJqEVm9HYggTiVeX42Dq1cIdH2v5LNNglg=s900-c-k-c0x00ffffff-no-rj" />} title="CareerFoundry">
            <Text fw={500} size="sm">Full-Stack Development Certificate</Text>
            <Text c="dimmed" size="sm">Dec 2023 - Dec 2024</Text>
            <Text mt="xs" size="sm">Intensive, project-based online training program focused on front-end 
            and back-end web development. Coursework includes:</Text>
            
            <List my="xs" size="sm">
                <ListItem>Frontend: JavaScript, React, HTML/CSS, React Native, Progressive Web Apps</ListItem>
                <ListItem>Backend: Node.js, Express, REST APIs, OAuth, MongoDB, Firebase, PostgreSQL, JWT, AWS</ListItem>
                <ListItem>Testing: Jest, Test-Driven Development, Puppeteer, Cucumber</ListItem>
            </List>
            <Link target="_blank" href="/Certificate.pdf">
            <Button aria-label="View CareerFoundry Certificate" variant="default" size="compact-xs">View Certificate</Button>
            </Link>
            </Timeline.Item>
        </Timeline>
    )
}