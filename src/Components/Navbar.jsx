import { Image,Flex,Button, Box,Text, Grid } from '@chakra-ui/react'
import {Link as ReactRouterLink ,useLocation} from "react-router-dom"
import { Link as ChakraLink ,useDisclosure } from '@chakra-ui/react';
import Model from './Model';

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    const links=[
        {
            to:"/",
            label:<Image mr="20px" src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg' alt=''/>,
            key: "home"
        },
        {
            to:"/menu",
            label:<Text fontWeight="bold" fontSize="13px">Menu</Text>,
            key: "menu"
        },
        {
            to:"/deals",
            label:<Text mr="500px" fontWeight="bold" ml="20px" fontSize="13px">Deals</Text>,
            key: "deals"
        },
        {
            to:"/signIn",
            label:<Image ml="150px" src='https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg' alt=''/>,
            key: "account_icon"
        },
        {
            to:"/signIn",
            label:<Text fontSize="13px"><b>Sign IN</b></Text>,
            key: "sign_in"
        },
        {
           to:"/signIn",
           label:<Text borderLeft="1px solid #E2E8F0" height="30px"></Text>, 
           key: "separator"
        },
        {
            to:'',
            label:<Text fontSize="13px" onClick={onOpen} cursor="pointer"><b>₹0</b></Text>,
            key: "price"
        },
        {
            to:"",
            label:<Image height="50px"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLJP0B2-dMhPMWLx7DWjv8G8PPa6fDlpfQw&s' onClick={onOpen} cursor="pointer"/>,
            key: "cart_icon"
        },
    ]

    
    const location = useLocation();
    if (location.pathname === '/signIn') {
        return null;
    }


    return (<>
        <Box  width="100%" position="fixed" top="0" zIndex="1000">
        <Box padding="12px"  overflow="hidden" bgColor="white">
            <Flex align="center" justifyContent="space-around" width="37%" m="auto">
            <Image src='https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg' alt='' height="14px" />
            <Text fontSize="14px" color="black">Allow location access for local store menu and promos</Text>
            <Button colorScheme='white' bgColor="black" color="white" fontSize="12px" height="30px" borderRadius="30px" ml="12px">Set Location</Button>
            </Flex>
        </Box>
        <Box bgColor="white"  boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px" border="1px solid rgba(27, 31, 35, 0.15)" borderBottom="none">
        <Flex padding="30px" alignItems="center" justifyContent="space-between" width="80%" margin="auto" >
        {links?.map((link)=>( 
            <ChakraLink  as={ReactRouterLink} key={link.key} to={link.to} >{link.label}</ChakraLink> 
        ))}
        </Flex>
        </Box>
        </Box>
        <Model isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>)
}