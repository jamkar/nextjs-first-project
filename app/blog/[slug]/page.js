export default function BlogPostPage({ params }) {
  console.log('params: ', params);
  return (
    <main>
      <h1>Blog Post: {params.slug}</h1>
    </main>
  );
}
