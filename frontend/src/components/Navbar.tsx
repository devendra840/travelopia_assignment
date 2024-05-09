import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";

const NavLink = ({
  children,
  route,
}: {
  children: ReactNode;
  route: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={route}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex>
            <NavLink route="/">
              <Text>Home</Text>
            </NavLink>
            <NavLink route="/admin">
              <Text>Admin</Text>
            </NavLink>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                bg={"orange.400"}
                _hover={{ bg: "orange.500" }}
                color={"white"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? "Light" : "Dark"}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
