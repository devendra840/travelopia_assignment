import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Input,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import SelectTag from "../components/SelectTag";
import { useEffect, useState } from "react";
import { OptionItem, TravelDataType } from "../DataTypes";
import {
  API_BASE_URL,
  MonthData,
  budgetOptions,
  interestsArray,
  travellerOptions,
  validateFormData,
} from "../ReuseAble";

export default function HomePage() {
  const [countries, setCountries] = useState<OptionItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  let defaultData = {
    no_of_travellers: "",
    country: "",
    interest: "",
    budget: "",
    name: "",
    email: "",
    travel_month: "",
    phone_number: "",
  };
  const [travelData, setTravelData] = useState<TravelDataType>(defaultData);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    let res = await fetch(`https://api.first.org/data/v1/countries?limit=50`);
    let data = await res.json();

    let finalCountriesData = [];
    for (let key in data.data) {
      finalCountriesData.push({
        value: data.data[key].country,
        id: Math.random() * 121212,
      });
    }
    setCountries(finalCountriesData);

    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setTravelData({ ...travelData, [`${e.target.name}`]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      let result: Boolean = validateFormData(travelData);
      if (result) {
        await fetch(`${API_BASE_URL}/traveller`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(travelData),
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
        setTravelData(defaultData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 4, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Traveling{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text
          color={"gray.500"}
          fontSize={{ base: "medium", sm: "xl", md: "2xl" }}
          maxW={"3xl"}
        >
          Explore Your World, Our Expertly Crafted Tours Await Across 70+ Dream
          Destinations
        </Text>

        <Stack
          direction={["column", "column", "row"]}
          spacing={["12px", "1px"]}
          width={"100%"}
        >
          <SelectTag
            value={travelData.country}
            sendSelectedOptionValue={handleChange}
            name={"country"}
            placeholder={"Where you want to go?"}
            options={countries}
          />
          <SelectTag
            value={travelData.interest}
            sendSelectedOptionValue={handleChange}
            name={"interest"}
            placeholder={"Your Intrests?"}
            options={interestsArray}
          />
          <SelectTag
            value={travelData.no_of_travellers}
            sendSelectedOptionValue={handleChange}
            name={"no_of_travellers"}
            placeholder={"No of travellers"}
            options={travellerOptions}
          />
          <SelectTag
            value={travelData.budget}
            sendSelectedOptionValue={handleChange}
            name={"budget"}
            placeholder="Budget Per Person"
            options={budgetOptions}
          />
        </Stack>
        {/* Second Stack for userData */}
        <Stack
          direction={["column", "column", "row"]}
          spacing={["12px", "1px"]}
          width={"100%"}
        >
          <Input
            value={travelData.name}
            maxW={["full"]}
            onChange={handleChange}
            name={"name"}
            type="text"
            placeholder={"Name"}
          />
          <Input
            value={travelData.email}
            maxW={["full"]}
            onChange={handleChange}
            name={"email"}
            type="email"
            placeholder={"Email"}
          />
          <Input
            value={travelData.phone_number}
            maxW={["full"]}
            onChange={handleChange}
            name={"phone_number"}
            type="number"
            placeholder={"Contact Number"}
          />
          <SelectTag
            value={travelData.travel_month}
            sendSelectedOptionValue={handleChange}
            name={"travel_month"}
            placeholder={"When ?"}
            options={MonthData}
          />
        </Stack>
        <Button
          isLoading={isLoading}
          onClick={handleSubmit}
          borderRadius={"1px"}
          bg={"orange.400"}
          _hover={{ bg: "orange.500" }}
          color={"white"}
        >
          CREATE MY TRIP NOW
        </Button>
        {/* <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack> */}
        <Flex w={"full"}></Flex>
      </Stack>
      {showAlert && (
        <Alert
          position={"fixed"}
          top={"10%"}
          width={"400px"}
          right={5}
          status="success"
          variant="top-accent"
        >
          <AlertIcon />
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </Alert>
      )}
    </Container>
  );
}
