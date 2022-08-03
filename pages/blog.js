import React from "react";
import Link from "next/link";
import { Text, Container } from "@chakra-ui/react";

export default function Blog(props) {
  return (
    <Container maxW="container.lg">
          <Text fontSize="4xl" as="h2">
            Should I write?
          </Text>
          <hr/>
          <Text fontSize="2xl">
            Should I start to write blogs?
            I was never a content producer, though I&apos;d love to talk and to say stories that I&apos;ve heard of or personally experienced.
            And I&apos;ve kept believing that writing everyday should result in lots of rewards in the long run. But could I write everyday?
            What would be my writing style? What shall be the topics that I have passion to write about?
            I have no idea, but let&apos;s see if I can concentrate and keep working on this long project.
          </Text>
    </Container>
  );
}
