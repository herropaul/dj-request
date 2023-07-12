"use client";
import {
  Input,
  Flex,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import QrCode from "../components/QrCode";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen text-white bg-slate-900">
      <h1>Welcome to Users Homepage</h1>
      <form>
        <FormControl className=" flex flex-row">
          <InputGroup>
            <Input
              color="white"
              borderColor="#07d88c"
              mb={5}
              type="text"
              placeholder="Enter artist"
              _placeholder={{ opacity: 1, color: "white" }}
              size="md"
            />
          </InputGroup>
          <Button
            mx={1}
            colorScheme="green"
            leftIcon={<SearchIcon />}
            type="submit"
          >
            Search
          </Button>
        </FormControl>
        {/* <QrCode /> */}
      </form>
    </div>
  );
}
