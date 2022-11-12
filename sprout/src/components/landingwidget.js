import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from './melda.png';
export function LandingWidget() {
	const property = {
		imageAlt: 'melda',
		title: 'Melda the Almighty',
		reviewCount: 34,

	  }
	
	  return (
		<Box maxW='250' borderWidth='1px' borderRadius='lg' overflow='hidden'>
		  <Image src={logo} alt={property.imageAlt} />
		  <Box p='6'>
			<Box display='flex' alignItems='baseline'>
			  <Box
				color='gray.500'
				fontWeight='semibold'
				letterSpacing='wide'
				fontSize='xs'
				textTransform='uppercase'
			  >
				Role Model
			  </Box>
			</Box>
	
			<Box
			  mt='1'
			  fontWeight='semibold'
			  as='h4'
			  lineHeight='tight'
			  noOfLines={1}
			>
			  {property.title}
			</Box>
	
			<Box display='flex' mt='2' alignItems='center'>
			  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
			  
			  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			  </Box>
			</Box>
		  </Box>
		</Box>
	  );
}
