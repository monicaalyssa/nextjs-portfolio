import { useMantineColorScheme } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";

export default function MailIcon() {
    const theme = useMantineColorScheme();
    
    return (
        <IconMail color={theme.colorScheme === "dark" ? "#fff" : "#000"} style={{ top: 2, position: "relative" }} size={23}></IconMail>
    )
}