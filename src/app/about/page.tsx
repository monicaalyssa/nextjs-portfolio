"use client"

import { useEffect, useState } from "react";

export default function About() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) {
      return null;
    }

    return (
        <div>
            <p>Hello World</p>
        </div>
    )
}