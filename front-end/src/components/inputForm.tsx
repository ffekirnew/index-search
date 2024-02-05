// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Form } from "react-router-dom"
import searchClient from "../service/clients/searchClient"
import { FeederRequest } from "../service/clients/searchClient"
import { useRef, useState } from "react"
import LoadingRipples from "./ui/LoadingRipples"

export default function InputForm() {
    const titleRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (values: FeederRequest) => {
        setIsLoading(true);
        searchClient.feeder(values).then((res) => {
            setIsLoading(false);
            console.log(res);
        }).catch(error => {
            setIsLoading(false);
            console.log(error);
        });
        }
  
    return (
       <Form className="flex flex-col gap-10 mt-20 p-20">
            <FormControl>
                  <FormLabel className="text-3xl">Title of the Book</FormLabel>
                  <Input ref={titleRef} placeholder='title' />
                  <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>
            <FormControl>
                  <FormLabel className="text-3xl">URL of the Book</FormLabel>
                  <Input ref={urlRef} placeholder='url' />
                  <FormErrorMessage>Error</FormErrorMessage>
            </FormControl>
            <Button
              onClick={()=>{
                const values: FeederRequest = {title: titleRef?.current?.value ?? "" , url: urlRef?.current?.value ?? ""}
                onSubmit(values);
              }}
              mt={4}
              colorScheme='teal'
              type='submit'
            >
              {isLoading ? <LoadingRipples color="black" size={"sm"} /> : <div className="text-lg">Submit</div>}
            </Button>
      </Form>
    )
  }