import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';
const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" font-weight="medium">{purpose}</Text>
      <Text  fontSize="3xl" font-weight="bold">{title1}<br/>{title2}</Text>
      <Text paddingTop="3" paddingBottom="3" fontSize="lg" >{desc1}</Text>
      <Button fontSize="xl" bg="blue.300" color="black">
        <Link href={linkName}>{buttonText}</Link>
      </Button>

    </Box>
  </Flex> 
)
export default function Home({ propertiesForSale, propertiesForRent}) {
  return (
    <Box>
      <Head>
        <title>Estate</title>
      </Head>
      <Banner 
        purpose="RENT A HOME"
        title1="Rentel Homes fro" 
        title2="Everyone"
        desc1="Explore Apartmentsn Villas, Homes"
        desc2="And more"
        buttonText="Explore Renting"
        linkName="/Search?purpose=for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'       
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map(property => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your" 
        title2="DreamHome"
        desc1="Explore Apartmentsn Villas, Homes"
        desc2="And more"
        buttonText="Explore Buying"
        linkName="/Search?purpose=for-sale"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008' 
      />   
      <Flex flexWrap="wrap">
        {propertiesForSale.map(property => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
 const propertyForRent =  await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
    return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
