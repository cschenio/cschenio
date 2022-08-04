# Step-by-step tutorial to setup Next.js blog with local Markdown files

https://nextjs.org/blog/markdown

``` bash
yarn add remark remark-html
```

## PoC

``` javascript
export default function Blog(props) {
  const { blogContent } = props;
  return (
    ...
    <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
  )
}

export const getStaticProps = async (context) => {
  const folder = path.join(process.cwd(), "blogs");
  const fileContents = await fs.readFile(folder + "/001.md", "utf8");

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
```

## Step 2

I want to fetch all blogs by file name and list. Therefore, I created a new page `blog/[slug].js`
to display every single post and copied the above code to this new file. Modified a little bit to
reflect the dynamic route `[slug]`. See below:

``` javascript
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
```

I intentionally defined the slug to be the filename without ".md" to make the url looks cleaner.
This is opinionated and I personally like it this way without the extension.
