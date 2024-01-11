import Link from "next/link";
import { Button } from "@chakra-ui/react";
import ArticleList from "./components/ArticlList";
import { Article } from "./types";

export default function Home() {
  return (
    <div>
      <Button
        as={Link}
        color="white"
        bg={"orange.400"}
        _hover={{ bg: "orange.300" }}
        size="lg"
        href="/blog/new"
      >
        新規作成
      </Button>
      <h1>新着記事</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

const articles: Article[] = [
  {
    id: 1,
    title: "title",
    content: "I have a pen. I have an apple.",
    slug: "slug",
    createAt: "2023-01-10",
    updatedAt: "2023-01-10",
  },
  {
    id: 2,
    title: "title",
    content: "I have a pen I have an apple.",
    slug: "slug",
    createAt: "2023-01-10",
    updatedAt: "2023-01-10",
  },
  {
    id: 3,
    title: "title",
    content: "I have a pen I have an apple.",
    slug: "slug",
    createAt: "2023-01-10",
    updatedAt: "2023-01-10",
  },
];
