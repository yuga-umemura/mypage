"use client"

import { useEffect } from "react";
import { Heading, Button } from "@chakra-ui/react";

export default function Error({error, reset}: {error: Error; reset: () => void;}) {
    // エラーが発生したらエラー内容をコンソールに出力
    useEffect(() => {
        console.log(error)
    }, [error]);

    return (
        <div>
            <Heading mb={4}>予期せぬエラーが発生しました</Heading>
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    )
}