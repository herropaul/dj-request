"use client";
import {
  Input,
  Flex,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { SearchIcon } from "@chakra-ui/icons";

import QrCode from "../components/QrCode";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-900">
      <h1 className="text-white">Welcome to Users Homepage</h1>
      <Formik
        initialValues={{ song: "" }}
        onSubmit={() => {
          alert("Submitted song");
        }}
      >
        <Form>
          <Field
            className=" rounded-md bg-slate-900 border text-white border-b-white"
            name="song"
            type="text"
          />
          <Button
            mx={1}
            colorScheme="green"
            leftIcon={<SearchIcon />}
            type="submit"
          >
            Search
          </Button>
        </Form>
        {/* <FormControl className=" flex flex-row">
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
        </FormControl> */}
      </Formik>
    </div>
  );
}
