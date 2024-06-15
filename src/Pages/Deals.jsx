import {Box,Flex,Button,Text,Image,Heading,Grid,useDisclosure} from "@chakra-ui/react";
import kfcBanner from "../assets/kfc-banner.png"
import "../Pages/Style.css";
import Model from "../Components/Model";
import Footer from "../Components/Footer";

export default function Deals() {
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
            <Image src={kfcBanner} alt="kfc-banner"/>
        </Box>
        <Box width="68%" margin="auto">
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="/>
            <Flex justifyContent="space-between" margin="40px 0px" align="center">
                <Heading fontSize="35px">NATIONAL OFFERS</Heading>
                <Text height="20px" textDecoration="underline" fontSize="14px">Sign In to see exclusive offers & deals</Text>
            </Flex>
        </Box>
        <Box width="68%" margin="auto"> 
            <Grid
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={2}
                width="100%"
                
            >
                <Box className="grid-ele" height="415px" > 
                    <Image  className="kfc-img-ele" src="https://online.kfc.co.in/static/media/Native_select%20a%20kfc_grey%20image.6e97ff02.svg"/>
                    <div className="overlay" >    
                        <Heading mt="70px" fontSize="30px" textAlign="center" color="white">SELECT A KFC TO SEE LOCAL OFFERS</Heading>
                        <Button mt="60px" className="button-on-image"
                            height="43px"
                            borderRadius="25px"
                            width="150px"
                            border="2px solid white"
                            bgColor="black" 
                            fontSize="14px"
                            _hover={{color:"black",bgColor:"white"}}
                            color="white"
                            >Find a KFC</Button>
                    </div>
                </Box>
                <Box className="grid-ele"
                bgColor="rgb(228, 0, 43)"

                >
                    <Heading width="280px" mt="80px" fontSize="28px" textAlign="center" color="white">SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS</Heading>
                    <Button 
                    margin="40px auto 0px 70px"
                    
                    height="43px"
                    borderRadius="25px"
                    width="150px"
                    border="2px solid white"
                    bgColor="rgb(228, 0, 43)" 
                    fontSize="14px"
                    _hover={{color:"black",bgColor:"white"}}
                    color="white"
                    >Login</Button>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Free Chicken zing...</h4>
                    <h5 className="grid-ele-2">1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for...</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Add 2 Pc Hot n...</h4>
                    <h5 className="grid-ele-2">Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart value of Rs 499 or more....</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Upto Rs 100 off on...</h4>
                    <h5 className="grid-ele-2">Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order...</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/PHP75.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Get flat Rs.75 off...</h4>
                    <h5 className="grid-ele-2">Get flat Rs.75 off on a cart value of Rs.599 or above</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Free Popcorn (Me...</h4>
                    <h5 className="grid-ele-2">Free Popcorn (Med) on a cart value of 499 or more. Friday only.</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Free 1pc Chicken...</h4>
                    <h5 className="grid-ele-2">Free 1pc Chicken on a cart value of 499 or more. Friday only.</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                <Box className="grid-ele">
                    <Image borderTopRadius="5px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYSTRIPS.jpg?ver=45.1"/>
                    <h4 className="grid-ele-1">Free 3pc Strips on ...</h4>
                    <h5 className="grid-ele-2">Free 3pc Strips on a cart value of 499 or more. Friday only.</h5>
                    <Box width="80%" margin="auto" >
                        <Flex mt="5px" justifyContent="space-between" >
                            <Button textDecoration="underline" fontSize="14px" bgColor="white" border="none"  className="grid-ele-b1">View Details</Button>
                            <Button 
                            borderRadius="25px"
                            height="45px"
                            width="120px"
                            border="2px solid black"
                            bgColor="white" 
                            fontSize="14px"
                            _hover={{color:"white",bgColor:"black"}}
                            color="black"
                             className="grid-ele-b2">Apply Offer</Button>
                        </Flex>
                    </Box>
                </Box>
                
            </Grid>
        </Box>
        <Footer/>
        </>)
}