# Next.js blog with local Markdown files -- Part 1

## Intro

I would like to write blogs in Markdown. By following this [article](https://nextjs.org/blog/markdown) and some original thoughts from myself, I then came up with the step-to-step tutorial below.

## Preparing

Installing `remark` and `remark-html` for rendering the Markdown file into HTML.

``` bash
yarn add remark remark-html
```

## PoC

First of all, I want to make sure `remark` serves its purpose: converting the Markdown content to HTML. Therefore, I added a file `001.md` under the "blogs/" folder, tried to convert it to HTML at the build time with `remark().use(remarkHTML).process(content)`. And after I've gotten the HTML content as a string, I then passed it as a props for the page to render. To render a raw HTML, this line would simply work. `<div dangerouslySetInnerHTML={{ __html: blogContent }}></div>`.

### Sample Code

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

Instead of hard-coding the file path of the blog post, I want to dynamically fetch all blogs. I also want to have 2 blog pages, one as the index page and another contains the single post. More, I don't want to maintain a list of every posts. I would rather the program reads the folder and assume that all `.md` files are my blog posts. To achieve all above, I decided to let `/blog` to be the index page and a new page `/blog/[slug]` is for the single post.

The "slug" could be any human-friendly string. I intentionally defined the slug to be the filename without ".md". This is opinionated and I personally like it this way without the extension. I think it makes the url looks cleaner.

### /blog

Reading the files on the server side, we use `fs.readdir()` in the `getStaticProps()` function to get all filenames. And then, in the React component, adding a link to each post. This fulfills the core need of an index page.

``` javascript
export default function Blog(props) {
  const { posts } = props;
  return (
    ...
    <>
    {posts.map(post =>
      <div key={post}>
        <Link href={`/blog/${post.replace(".md", "")}`} passHref>
          <a>
            {post}
          </a>
        </Link>
      </div>,
    )}
    </>
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
```

### /blog/\[slug\]

Copied from the above PoC and modified a little bit, we've gotten a piece of code for the single post.

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
