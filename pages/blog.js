import React from "react";
import Link from "next/link";
import { Text, Container } from "@chakra-ui/react";
import path from "path";
import { promises as fs } from "fs";

export default function Blog(props) {
  const { posts } = props;
  return (
    <Container maxW="container.lg">
      {posts.map(post =>
        <div key={post}>
          <Link href={`/blog/${post.replace(".md", "")}`} passHref>
            <a>
              {post}
            </a>
          </Link>
        </div>,
      )}
    </Container>
  );
}

export const getStaticProps = async (context) => {
  const folder = path.join(process.cwd(), "blogs");
  const posts = await fs.readdir(folder);

  return {
    props: {
      posts,
    },
  };
};
