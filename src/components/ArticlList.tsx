import { VStack } from "@chakra-ui/react";
import { Article } from "../app/blog/types";
import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <VStack spacing={4} as="ul">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  );
}
