"use client";
import { Button } from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SearchIcon } from "@chakra-ui/icons";

import QrCode from "../components/QrCode";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { debounce } from "lodash";

interface FormValues {
  song: string;
}

interface Track {
  name: string;
  artists: { name: string }[];
}

export default function Home() {
  const initialValues: FormValues = { song: "" };
  const [input, setInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Track[]>([]);

  const search = async (value: string): Promise<void> => {
    try {
      const { data } = await axios.get(`/api/getTracks?q=${value}`);
      data.tracks.items.forEach(
        (track: { name: string; artists: { name: string }[] }) => {
          const artistNames = track.artists
            .map((artist) => artist.name)
            .join(", ");
          console.log("Track Name: " + track.name + " by: " + artistNames);
        }
      );
      //console.log("Data: " + JSON.stringify(data.tracks.items[0].name));
    } catch (err) {}
  };

  useEffect(() => {
    search("beautiful");
  }, []);

  //if (!artist) return <div>Failed to get data...</div>;

  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-900">
      <h1 className="text-white">Welcome to Users Homepage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          alert("Submitted song");
        }}
        validationSchema={Yup.object({
          song: Yup.string().required("Required"),
        })}
      >
        <Form>
          <Field
            className=" rounded-md bg-slate-900 border text-white border-b-white"
            name="song"
            type="text"
          />
          <ErrorMessage name="error" component="div" />
          <Button
            mx={1}
            colorScheme="green"
            leftIcon={<SearchIcon />}
            type="submit"
          >
            Submit
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
