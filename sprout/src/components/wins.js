import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export function Wins() {
    const property = {
        imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
        imageAlt: 'Doggo',
        title: 'Trained Doggo all by myself!',
        formattedPrice: 'I took Doggo in when he was 2 months old. he is the absolute light of my life. 2 years later and he is all trained!',
        thought: 'Pog',
        rating: 4,
    }

    return (
        <div>
            <div className='Page-header'>Wins - Remind yourself of your accomplishments!</div>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />
    
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                September 19, 2022
                </Badge>
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
    
            <Box>
                {property.formattedPrice}
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon
                    key={i}
                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                    />
                ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {property.thought}
                </Box>
            </Box>
            </Box>
        </Box>
      </div>
    );
}