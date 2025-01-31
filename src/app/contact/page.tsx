"use client";

import { Anchor, Button, Flex, Text, Textarea, TextInput, Title, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconSend } from "@tabler/icons-react";
import Footer from "../main/footer";
import MailIcon from "../icons/mail";

export default function Contact() {
  const theme = useMantineColorScheme()
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:5050/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error (data.error)
      setFormData({ name: "", email: "", message: ""})
      
      } catch (error) {
        console.error("Error sending email:", error);
      }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Title c={theme.colorScheme === "dark" ? "white" : "black"} order={2}>
        Contact
      </Title>
      <Text mt={5}>Feel free to reach out via email or by filling out the form below. I’d love to hear from you!</Text>
        <Anchor title="Reach me by email" component="a" href="mailto:monicaalyssa.tech@gmail.com">monicaalyssa.tech@gmail.com</Anchor>
      <form onSubmit={handleSubmit}>
      <Flex direction="column" my="xs">
        <Flex direction="row" gap="sm" justify="space-between">
          <TextInput value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} classNames={{ label: "contactLabel" }} flex={1} mb="sm" label="Name"></TextInput>
          <TextInput value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}  classNames={{ label: "contactLabel" }} flex={1} mb="sm" required label="Email"></TextInput>
          </Flex>
          <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}  classNames={{ label: "contactLabel" }} minRows={4} required autosize placeholder="Leave feedback about my site, share career opportunities, or anything else!" mb="sm" label="Message"></Textarea>
        </Flex>
        <Text size="xs" mb="md">Once you submit the form, I&apos;ll get back to you as soon as possible using the email address you provided. Your information will only be used to respond to your inquiry and will never be shared without your consent.
        </Text>
      <Button type="submit" fullWidth classNames={{ section: "sendIcon" }} rightSection={<IconSend size={12.8} />} variant="default">Send Message</Button>
      </form>
      <Footer />
    </> 
  );
}
