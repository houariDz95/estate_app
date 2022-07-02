import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs'
import {GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../assets/images/house.jpg';

function Property({property}) {
  return (
    <Link href={`/property/${property.externalID}`}>
      <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
        <Box>
          <Image 
          src={property.coverPhoto ? property.coverPhoto.url : DefaultImage} 
          width={400} height={260}
          alt="house" />
        </Box>
        <Box w="full"> 
          <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
            <Box paddingRight="3" color="green.400" >{property.isVerified && <GoVerified />}</Box>
              <Text fontWeight="bold" fontSize="lg">AED {millify(property.price)}{property.rentFrequency && `/${property.rentFrequency}`}</Text>
            </Flex>
            <Box >
              <Avatar size="sm" src={property.agency?.logo.url}/>
            </Box>
          </Flex>
          <Flex alignItems="center" p="1" justifyContent="space-between" w="25" color="blue.400">
            {property.rooms} <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {property.title.length > 30 ? `${property.title.substring(0, 30) }...` : property.title}
          </Text>
        </Box>
      </Flex>
    </Link> 
  )
}

export default Property