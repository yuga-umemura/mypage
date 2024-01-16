import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "../types";
import ArticleContent from "@/components/ArticleContent";
import { Heading } from "@chakra-ui/react";
import { Suspense } from "react";

// 記事を取得
const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if(!res.ok) {
    throw new Error("Failed to fetch article");
  }

  const data = await res.json();
  return data as Article;
}

// 記事のMetadataを取得
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
  parent?: ResolvingMetadata;
}): Promise<Metadata> {
  const article = await getArticle(params.slug);
  return {
    title: article?.title,
    description: article?.content,
  };
}

// コメントを取得
const getComments = async () => {}

// 記事の詳細を取得
export default async function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const articlePromise = getArticle(params.slug);
  
  const article = await articlePromise;

  return (
    <div>
      <ArticleContent article={article} />
    </div>
  )
}