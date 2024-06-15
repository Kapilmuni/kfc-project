import React from 'react'
import {  } from '@chakra-ui/react';
import {Modal,ModalOverlay,Flex,
  ModalContent,ModalHeader,
  ModalFooter,ModalBody,Text,
  ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react';

  function Model( { isOpen, onOpen, onClose }) {
    return (
      <>  
        
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="800px" maxH="1000px" >
            <ModalHeader color="rgb(32, 33, 36)" fontSize="19px" fontWeight="bold" textAlign="center" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">START YOUR ORDER</ModalHeader>
            <ModalCloseButton height="50px" width="60px" />
            <ModalBody color="rgb(32, 33, 36)" fontSize="32px" width="80%"  margin="auto" mt="10px" textAlign="center" fontWeight="bold">
              HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
            </ModalBody>
            <ModalBody>
              <Text count={2} />
            </ModalBody>
  
            <ModalFooter>
            <Flex direction="column" alignItems="center" width="100%">
              <Button colorScheme="rgb(32, 33, 36)" mb="30px" _hover={{bgColor:"rgb(234, 236, 243)"}} variant='outline' outlineColor="" bgColor="white" color="rgb(32, 33, 36)" fontSize="14px" height="43px" width="50%" borderRadius="30px" >
                Delivery
              </Button>
              <Button colorScheme="rgb(32, 33, 36)" mb="30px" _hover={{bgColor:"rgb(234, 236, 243)"}} variant='outline' outlineColor="" bgColor="white" color="rgb(32, 33, 36)" fontSize="14px" height="43px" width="50%" borderRadius="30px" >
                Pick up </Button>
              <Button colorScheme="rgb(32, 33, 36)" mb="70px" _hover={{bgColor:"rgb(234, 236, 243)"}} variant='outline' outlineColor="" bgColor="white" color="rgb(32, 33, 36)" fontSize="14px" height="43px" width="50%" borderRadius="30px" >
                Dine In </Button>
            </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Model
