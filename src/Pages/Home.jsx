import {Box,Flex,Text,
    Button,Image, Heading ,
    Grid,List,UnorderedList,
    ListItem,useDisclosure} from "@chakra-ui/react";

import Model from "../Components/Model";
import Footer from "../Components/Footer"

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
        <Box marginTop="165px" padding="12px" bgColor="rgb(32, 33, 36)">
            <Flex align="center"  justifyContent="space-around" width="43%" m="auto">
                <Text fontSize="14px" color="white" fontFamily="Arial Black">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button onClick={onOpen} cursor="pointer" colorScheme='white' bgColor="red" color="white" fontSize="14px" height="45px" width="160px" borderRadius="30px" ml="12px">Start Order</Button>
            </Flex>
        </Box>
        <Model isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        <Box>
            <Image src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1372&fit=fill&fm=webp"/>
        </Box>
        <Box paddingTop="100px" paddingBottom="60px">
            <Flex  alignItems="center"  margin="auto">
            <Heading fontSize="32px" ml='170px'>BROWSE CATEGORIES</Heading>
            <hr
        style={{
          backgroundColor:'#E2E8F0',
          color: '#E2E8F0',
          borderColor: '#E2E8F0',
          height: '1px',
          marginLeft:'30px',
          width:"630px"
        }} />
        </Flex>
        </Box>
        <Box width="74%" margin="auto" height="500px">
            <Grid
                
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={2}
                gridRowGap={5} 
            >
                <Box width="94%" height="80%"  borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px"   fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">INTERNATIONAL BURGER FEST</Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">MATCH DAY COMBOS</Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">VALUE LUNCH SPECIALS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">BOX MEALS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">BURGERS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">CHICKEN BUCKETS
                    </Text>
                </Box>
                <Box width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=45.09"/>
                    <Text borderRadius="0px 0px 5px 5px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">RICE BOWLZ
                    </Text>
                </Box>
                <Box bgColor="rgb(248,247,245)" width="94%" height="80%" borderRadius="5px" >
                    <Image borderRadius="5px 5px 0px 0px" height="180px" width="100%" src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg "/>
                    <Flex width="100%" bgColor="rgb(248,247,245)">
                    <Text borderRadius="0px 0px 5px 5px" marginLeft="40px" fontFamily="Sans-serif" fontWeight="bold" textAlign="center" bgColor="rgb(248,247,245)"  padding="19px" fontSize="13px">View All Menu </Text>
                    <Image src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"/>
                    </Flex>
                </Box>

            </Grid>
        </Box>

        <Footer/>



    </>)
}