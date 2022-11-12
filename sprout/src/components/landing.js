import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { LandingWidget } from './modelcard.js';
import { Grid, GridItem } from '@chakra-ui/react';

export function Landing() {

	return(
        <Grid
        h='800px'
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={4} colSpan={1} ><LandingWidget></LandingWidget></GridItem>
        <GridItem rowSpan={2} colSpan={1} bg='papayawhip' />
        <GridItem rowSpan={2} colSpan={1} bg='papayawhip' />
        <GridItem rowSpan={2} colSpan={1} bg='papayawhip' />
        <GridItem rowSpan={2} colSpan={3} bg='tomato' />
      </Grid>
	);
}