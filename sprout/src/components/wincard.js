import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export function WinCard({imageUrl, imageAlt, title, description, thought, rating, date}) {
    return (
        <div>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={imageUrl} alt={imageAlt} />
    
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {date}
                </Badge>
            </Box>
    
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
            >
                {title}
            </Box>
    
            <Box>
                {description}
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon
                    key={i}
                    color={i < rating ? 'teal.500' : 'gray.300'}
                    />
                ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {thought}
                </Box>
            </Box>
            </Box>
        </Box>
      </div>
    );
}