import './Style.css'; 
import {Box,Heading,Text,Image,Flex,Link,Button,FormControl,FormLabel,Input,FormErrorMessage} from "@chakra-ui/react";
import { Field, Form, Formik } from 'formik';

export default function SignIn() {
    function validateName(value) {
        let error
        if (!value) {
            error = 'Please enter a valid 10-digit mobile number'
        }
        return error
    }
    return(
        <>
            <Box  width="40%" margin="auto" marginTop="60px">
                <Text mb="30px" fontWeight="bold" textAlign="center" fontSize="13px">Sign In / Sign up</Text>
                <Link href="/">
                    <Image margin="auto" src="https://login.kfc.co.in/auth/resources/jdsrg/login/kfcIndiaLoginUIDev_02-23-2024-12-20/images/KFC_logo.svg"/>
                </Link>
                <Heading textAlign="center" mt="30px" mb="30px" fontFamily="National2CondensedWeb-Medium (woff)" fontSize="18px"><b>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</b></Heading>
            </Box>
            <Formik
                    initialValues={{ name: '' }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field name='name' validate={validateName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name} mt="20px" mb="20px" margin="auto" width="35%">
                                        <Input {...field} border="none"  _placeholder={{color:'black'}}  _focus={{ boxShadow: 'none', borderBottom: '1px solid black' }}  boxShadow="none" borderRadius="none" borderBottom="1px solid black" maxLength="10" type="number" placeholder='Phone Number*' />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Text marginTop="20px" textAlign="center" fontSize="13px">By “logging in to KFC”, you agree to our <b><a href="">Privacy Policy</a></b> and <b><a href="">Terms & Conditions</a></b>.</Text>
                            <Button
                                color='white'
                                bgColor='black'
                                colorScheme="white"
                                isLoading={props.isSubmitting}
                                type='submit'
                                margin="30px auto 0px auto"
                                display="block"
                                fontSize="13px"
                                width="170px"
                                height="45px"
                                borderRadius="30px"
                            >
                                Send Me a Code
                            </Button>
                        </Form>
                    )}
            </Formik>
            <Box width="35%" margin="25px auto 0px auto"  >
                <Flex align="center" justifyContent="space-between">
                    <hr  width="220px" />
                    <Text >or</Text>
                    <hr  width="220px" />
                </Flex>
                <Link href="/">
                    <Button mt="30px" width="100%" bgColor="white" border="1px solid black" height="45px" _hover={{bgColor:'white'}} borderRadius="30px">Skip, Continue As Guest</Button>
                </Link>
            </Box>
        </>
    )
}