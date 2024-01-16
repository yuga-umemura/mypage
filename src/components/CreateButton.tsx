import { Button } from "@chakra-ui/react"
import Link from "next/link"

export default function CreateButton() {
  return (
    <div className="pr-8 py-1 flex flex-row-reverse">
      <Button
        as={Link}
        color="white"
        bg={"blue.500"}
        _hover={{ bg: "blue.300" }}
        size="md"
        href="/blog/new"
      >
        新規作成
      </Button>
    </div>
  )
}