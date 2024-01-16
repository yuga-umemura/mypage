import { Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return(
    <div>
      <Heading mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button as={Link} href="/">
        トップへ戻る
      </Button>
    </div>
  )
}