import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  useDisclosure,
  FormLabel,
  Input,
  Link,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import LoginViaOTP from "./LoginViaOTP";
import { Link as ReachLink } from "react-router-dom";

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Link onClick={onOpen}>Login</Link>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon />}
                />
                <Input
                  ref={initialRef}
                  placeholder="Enter Email Address"
                  focusBorderColor="green.600"
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon />}
                />
                <Input
                  type="password"
                  placeholder="Enter Password"
                  focusBorderColor="green.600"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          {/* <LoginViaOTP /> */}
          {/* <Link as={ReachLink} to="/<LoginViaOTP />" onClick={onClose}> */}

          <Link isOpen={isOpen} onClick={onClose}>
            <LoginViaOTP />
          </Link>

          {/* </Link> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
