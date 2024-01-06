import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdConnectedTv,
  MdElectricBolt,
  MdPhoneInTalk,
  MdWifiTethering,
} from "react-icons/md";
import { UtilityCard } from "./UtilityCard";
import { UtilityModal } from "./UtilityModal";
import Link from "next/link";
import { BrowserProvider, formatEther } from "ethers";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useAccount } from "wagmi";
const Utility = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [balance, setBalance] = useState("0");

  const [type, setType] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      const provider = new BrowserProvider(window.ethereum);
      provider.getBalance(address).then((balance: any) => {
        console.log(parseFloat(formatEther(balance.toString())).toFixed(2));
        setBalance(parseFloat(formatEther(balance.toString())).toFixed(2));
      });
    }
  }, [address, isConnected]);
  return (
    <Container>
      <HStack
        width={"full"}
        borderRadius={"10px"}
        padding={"10px"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        bg={"#2d4b85"}
      >
        <VStack
          color={"#fff"}
          width={"full"}
          gap={"5px"}
          alignItems={"flex-start"}
        >
          <HStack fontSize={"xs"} alignItems={"center"}>
            <Text>Available Balance</Text>
          </HStack>
          <HStack
            fontWeight={"600"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"4px"}
          >
            <Text fontSize={"lg"}>{balance}</Text>
            <Text fontSize={"md"}>cUSD</Text>
          </HStack>
          <HStack
            fontWeight={"400"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"4px"}
          >
            <Text fontSize={"sm"}>&#8358;</Text>
            <Text fontSize={"md"}>{balance}</Text>
          </HStack>
        </VStack>
        <VStack width={"full"} alignItems={"flex-end"}>
          <Link href={"/transaction-history"}>
            <HStack width={"full"} justifyContent={"center"} color={"#fff"}>
              <Text fontSize={"xs"}>Transaction History</Text>
              <ChevronRightIcon fontSize={"lg"} />
            </HStack>
          </Link>
        </VStack>
      </HStack>
      <Text textAlign={"center"} fontWeight={"500"} my={"20px"}>
        Bills Payment
      </Text>
      <Grid
        width={"full"}
        templateColumns="repeat(2, 1fr)"
        borderRadius={"12px"}
        gap={"20px"}
        justifyItems={"center"}
        alignItems={"center"}
      >
        <UtilityCard
          icon={<MdPhoneInTalk />}
          text={"Airtime"}
          action={() => {
            setType("airtime");
            onOpen();
          }}
        />
        <UtilityCard
          icon={<MdWifiTethering />}
          text={"Data"}
          action={() => {
            setType("data");
            onOpen();
          }}
        />
        <UtilityCard
          icon={<MdElectricBolt />}
          text={"Electricity"}
          action={() => {
            setType("electricity");
            onOpen();
          }}
        />
        <UtilityCard
          icon={<MdConnectedTv />}
          text={"Cable"}
          action={() => {
            setType("cable");
            onOpen();
          }}
        />
      </Grid>

      <UtilityModal type={type} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Utility;
