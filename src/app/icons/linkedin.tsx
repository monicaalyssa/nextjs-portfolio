import { useMantineColorScheme } from "@mantine/core";
import classes from "./icon.module.css"

export default function LinkedInIcon() {
  const theme = useMantineColorScheme();

  return (
    <svg
      className={classes.iconHoverFill}
      aria-label="LinkedIn Logo"
      xmlns="http://www.w3.org/2000/svg"
      fill={theme.colorScheme === "dark" ? "var(--mantine-color-dark-3)" : "#000"}
      x="0px"
      y="0px"
      width="21"
      height="21"
      viewBox="0 0 24 24"
    >
      <path d="M 4,3 C 3.44,3 3,3.44 3,4 3,4.55 3.44,5 4,5 4.55,5 5,4.55 5,4 5,3.44 4.55,3 4,3 Z M 1,4 C 1,2.34 2.34,1 4,1 5.65,1 7,2.34 7,4 7,5.65 5.65,7 4,7 2.34,7 1,5.65 1,4 Z M 1,9 C 1,8.44 1.44,8 2,8 h 4 c 0.55,0 1,0.44 1,1 v 13 c 0,0.55 -0.45,1 -1,1 H 2 C 1.44,23 1,22.55 1,22 Z m 2,1 V 21 H 5 V 10 Z M 8,9 C 8,8.44 8.44,8 9,8 h 4 c 0.54,0 0.99,0.44 1,0.99 v 0.37 l 0.38,-0.32 c 0.8,-0.68 1.83,-1.05 2.88,-1.05 h 0.23 c 3.03,0 5.5,2.46 5.5,5.5 v 8.5 c 0,0.55 -0.45,1 -1,1 h -4 c -0.56,0 -1,-0.45 -1,-1 v -6 c 0,-0.83 -0.68,-1.5 -1.5,-1.5 -0.83,0 -1.5,0.67 -1.5,1.5 v 6 c 0,0.55 -0.45,1 -1,1 h -4 c -0.56,0 -1,-0.45 -1,-1 v -13 z m 2,1 v 11 h 2 v -5 c 0,-1.94 1.56,-3.5 3.5,-3.5 1.93,0 3.5,1.56 3.5,3.5 v 5 h 2 V 13.5 C 21,11.56 19.43,10 17.5,10 h -0.24 c -0.59,0 -1.16,0.2 -1.61,0.58 l -2.01,1.67 c -0.3,0.24 -0.72,0.3 -1.07,0.13 -0.36,-0.17 -0.58,-0.52 -0.58,-0.91 L 11.98,9.97 H 9.97 Z"></path>
    </svg>
  );
}
