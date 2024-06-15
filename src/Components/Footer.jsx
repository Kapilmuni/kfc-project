import React from 'react';
import { Box, Flex, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box width="100%" height="370px" mt="30px" paddingTop="100px" bgColor="rgb(32, 33, 36)">
      <Flex width="85%" margin="auto">
        <Image mb="60px" mr="80px" src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="" />
        <Box>
          <Flex>
            <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
              <ListItem>Legal</ListItem>
              <ListItem>Terms and Conditions</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Disclaimer</ListItem>
              <ListItem>Caution Notice</ListItem>
            </UnorderedList>
            <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
              <ListItem>KFC India</ListItem>
              <ListItem>About KFC</ListItem>
              <ListItem>KFC Care</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Our Golden Past</ListItem>
            </UnorderedList>
            <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
              <ListItem>KFC Food</ListItem>
              <ListItem>Menu</ListItem>
              <ListItem>Order Lookup</ListItem>
              <ListItem>Gift Card</ListItem>
              <ListItem>Nutrition & Allergen</ListItem>
            </UnorderedList>
            <UnorderedList spacing="6px " fontSize="14px" mr="10px" listStyleType="none" color="white">
              <ListItem>Support</ListItem>
              <ListItem>Get Help</ListItem>
              <ListItem>Contact Us</ListItem>
              <ListItem>KFC Feedback</ListItem>
              <ListItem>Privacy Policy</ListItem>
            </UnorderedList>
          </Flex>
        </Box>
        <Box>
          <Flex ml='20px' >
            <Image src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg" />
            <Text ml="10px" color="white" fontSize="14px" textDecoration="underline"><a href="">Find a KFC</a></Text>
          </Flex>
        </Box>
        <Box>
          <Flex gap="30px" ml="70px">
            <a href="https://play.google.com/store/apps/details?id=com.yum.kfc"><Image width="120px" src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" /></a>
            <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379"><Image width="120px" src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" /></a>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Flex gap="44%" align="center" mt="90px" width="70%" ml="auto">
          <Text fontSize="12px" color="rgb(219, 219, 219)">Copyright © KFC Corporation 2024 All rights reserved</Text>
          <Flex gap="10px">
            <a href="https://www.instagram.com/kfcindia_official/"><Image src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" /></a>
            <a href="https://www.facebook.com/KFCIndia"><Image src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" /></a>
            <a href="https://x.com/KFC_India"><Image src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" /></a>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
