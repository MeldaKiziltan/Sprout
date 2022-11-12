import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from './melda.png';
export function Widget() {
	const property = {
		imageAlt: 'melda',
		title: 'Melda the Almighty'
	  }
	
	  return (
		<Box maxW='sm' height= "300px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
			  Melda has successfully saved many students from handing in late assignments.

			  Melda the almighty rules, all hail melda
			  </Box>
			</Box>
		  </Box>
		</Box>
	  );
}
