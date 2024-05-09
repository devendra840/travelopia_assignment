import {
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../ReuseAble";
import { TravelDataType } from "../DataTypes";

const AdminPage = () => {
  const [travellerData, setTravellerData] = useState<TravelDataType[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    fetchTravellerData();
  }, []);

  const fetchTravellerData = async () => {
    setLoadingData(true);
    try {
      let res = await fetch(`${API_BASE_URL}/traveller`);
      let data = await res.json();
      setTravellerData(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <div>
      <Heading
        marginTop={"95px"}
        mb={50}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Queries of{" "}
        <Text as={"span"} color={"orange.400"}>
          Travel Enthusiasts'
        </Text>
      </Heading>

      <TableContainer width={"95%"} margin={"auto"}>
        <Table variant="striped" colorScheme="orange">
          <TableCaption>
            Traveling is the master key that unlocks the doors to diverse
            cultures, new perspectives, and personal growth
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Budget</Th>
              <Th>Country</Th>
              <Th>Interest</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th isNumeric>Phone Number</Th>
              <Th>No Of Travellers</Th>
              <Th>Travel Month</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loadingData && (
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                <Text
                  textAlign={"center"}
                  width={"fit-content"}
                  margin={"auto"}
                  as={"span"}
                  color={"orange.400"}
                >
                  Loading...
                </Text>
              </Heading>
            )}
            {travellerData.map((el: TravelDataType) => (
              <Tr>
                <Td>{el.budget}</Td>
                <Td>{el.country}</Td>
                <Td>{el.interest}</Td>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td isNumeric>{el.phone_number}</Td>
                <Td>{el.no_of_travellers}</Td>
                <Td>{el.travel_month}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminPage;
