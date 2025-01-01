import { Flex, FloatingIndicator, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import classes from "./tabs.module.css";
import Education from "./education";
import Work from "./work";

const data = ["Education", "Work"];

export default function Tabs() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      ref={setControlRef(index)}
      className={classes.control}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
      key={item}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));
  return (
    <>
    <Flex mt="xl" className={classes.root} ref={setRootRef}>
      {controls}
      <FloatingIndicator className={classes.indicator} target={controlsRefs[active]} parent={rootRef} />
    </Flex>
    {active === 0 ? (<Education />) : (<Work />)}
    </>
  );
}
