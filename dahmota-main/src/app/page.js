"use client";

import { Button, Flex, Image, Text, Box, Divider } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex padding="15px" flexDirection="column">
      <Flex
        justifyContent="space-between"
        w="full"
        padding="10px"
        borderRadius="20px"
      >
        <Flex flexDir="row">
          <Image src="/dahmotta.svg" alt="logo" width="50px" />
          <Flex direction="column">
            <Text ml="15px" fontWeight="bold" fontSize="25px" color="#FFF">
              DahMotta Tecnologia
            </Text>
            <Text ml="15px" fontWeight="bold" fontSize="10px" color="#FFF">
              Expertise. Commitment. Value.
            </Text>
          </Flex>
        </Flex>

        <Flex align="center">
          <Button color="#FFF" variant="unstyled">
            Sobre nos
          </Button>
          <Button color="#FFF" variant="unstyled" marginX="20px">
            Galeria
          </Button>
          <Button
            color="#FFF"
            rightIcon={
              <Image src="/icons/svg/HeadPhone.svg" alt="logo" width="12px" />
            }
            variant="unstyled"
          >
            Contato
          </Button>
        </Flex>
      </Flex>
      <Flex backgroundColor="#FFF" flex="0.5">
        <Image src="/BackgroundImage.jpg" />
      </Flex>
    </Flex>
  );
}
