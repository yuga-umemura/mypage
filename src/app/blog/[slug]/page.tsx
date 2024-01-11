export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>記事の詳細</h1>
      <p>記事のスラッグ: {params.slug}</p>
    </div>
  );
}
