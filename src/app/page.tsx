import styles from "./page.module.css";
import { Text } from "@mantine/core";

export default function Home() {
  return (
    <div className={styles.page}>
      <Text>Hello Main Page</Text>
    </div>
  );
}
