import { useMantineColorScheme } from "@mantine/core";
import classes from "./icon.module.css"

export default function MailIcon() {
  const theme = useMantineColorScheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      aria-label="Mail Envelope Icon"
      height="23"
      className={classes.iconHoverColor}
      color={theme.colorScheme === "dark" ? "var(--mantine-color-dark-3)" : "#000"}
      viewBox="0 0 24 24"
      fill="none"
      style={{ top: 2, position: "relative" }}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );
}
