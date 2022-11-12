import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from './melda.png';
export function MeditationWidget() {
	const property = {
		title: 'Meditation'
	  }
	
	  return (
		<Box maxW='sm' height= "250px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
		  <Box p='6'>
	
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
			  Take some time for daily affirmations and to boost your confidence 
			  </Box>
			</Box>
		  </Box>
		</Box>
	  );
}
