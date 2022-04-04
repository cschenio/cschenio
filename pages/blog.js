import React from "react";
import Link from "next/link";
import { Center, Container } from "@chakra-ui/react";

export default function Blog(props) {
  return (
    <Container maxW="container.xl">
      <Center>
          <p>
            My blog.
          </p>
      </Center>
    </Container>
  );
}
