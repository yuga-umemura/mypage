import { HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function SNS() {
  return (
    <HStack>
      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
        Facebook
      </Button>
      <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
        Twitter
      </Button>
    </HStack>
  );
}
