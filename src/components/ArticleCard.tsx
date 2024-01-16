import {
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Article } from "../app/blog/types";
import NextLink from "next/link";

export default function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.createAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Card
      as={"li"}
      _hover={{
        boxShadow: "xl",
      }}
      minW={"100%"}
    >
      <NextLink href={`/articles/${article.slug}`}>
        <CardHeader>
          <Heading size="md">{article.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{article.content.substring(0, 200)}...</Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="sm" color="gray.600">
            {formattedDate}
          </Text>
        </CardFooter>
      </NextLink>
    </Card>
  );
}
