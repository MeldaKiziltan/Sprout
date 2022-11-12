import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { LandingWidget } from './landingwidget.js';
import { Grid, GridItem } from '@chakra-ui/react';

export function Landing() {

	return(
	<Grid
	templateAreas={`"header header"
					"nav main"
					"nav footer"`}
	gridTemplateRows={'50px 1fr 300px'}
	gridTemplateColumns={'270px 1fr'}
	h='600px'
	gap='1'
	color='blackAlpha.700'
	fontWeight='bold'
	>
	<GridItem pl='2'  area={'header'}>
		Welcome to Sprout! 
	</GridItem>
	<GridItem pl='2' area={'nav'}>
		<LandingWidget></LandingWidget> 
	</GridItem>
	<GridItem pl='2' bg='green.300' area={'main'}>
		Main
	</GridItem>
	<GridItem pl='2' bg='blue.300' area={'footer'}>
		Footer
	</GridItem>
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
