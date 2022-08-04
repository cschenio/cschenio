import React from "react";
import Link from "next/link";
import { Container } from "@chakra-ui/react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import path from "path";
import { promises as fs } from "fs";

export default function Post(props) {
  const { blogContent } = props;
  return (
    <Container maxW="container.lg">
      <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
      <Link href="/blog" passHref><a>{"<< Back"}</a></Link>
    </Container>
  );
}

export const getServerSideProps = async (context) => {
  const folder = path.join(process.cwd(), "blogs");
  const post = context.query.slug + ".md";
  const fileContents = await fs.readFile(folder + "/" + post, "utf8");

  const file = await remark()
    .use(remarkHtml)
    .process(fileContents);

  const blogContent = String(file);

  return {
    props: {
      blogContent,
    },
  };
};
