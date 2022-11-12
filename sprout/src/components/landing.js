import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { LandingWidget } from './landingwidget.js';
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

{/* <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
  <roleModelWidget></roleModelWidget>
    changes
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
	
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>) */}
}
