import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from './RoleModelAssets/melda.png';
export function DiscussionWidget() {
	const property = {
		title: 'Discussion'
	  }
	
	  return (
		<Box maxW='1200px' height= "300px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
			 Talk with your fellow women in stem
			  </Box>
			</Box>
		  </Box>
		</Box>
	  );
}
