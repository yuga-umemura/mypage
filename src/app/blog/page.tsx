import { Heading } from "@chakra-ui/react";
import CreateButton from "@/components/CreateButton";
import ArticleList from "../../components/ArticlList";
import { Article } from "./types";
import { ResolvingMetadata } from "next";

// 記事を取得
async function getArticles() {
  const res = await fetch("http://localhost:3000/api/blog");

  if(!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <div>
      <CreateButton />
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}


