import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { randomUUID } from "crypto";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // わからん
  if (req.method === "GET") {
    const articles = JSON.parse(fs.readFileSync("articles.json", "utf-8"));
    articles.articles.sort((a: any, b: any) => {
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });
    res.status(200).json(articles);
  } else if(req.method === "POST") {
    const { title, content } = req.body;
    const articles = JSON.parse(fs.readFileSync("articles.json", "utf-8"));
    const id = articles.articles.length + 1;
    const date = new Date();
    const slug = randomUUID();
    const newArticle = {
      id,
      title,
      slug,
      content,
      createdAt: date,
      updatedAt: date,
    };
    articles.articles.push(newArticle);
    fs.writeFileSync("artiles.json", JSON.stringify(articles));
    res.status(201).json(newArticle);
  } else {
    res.status(405).end();
  }
}