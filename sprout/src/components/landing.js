import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { LandingWidget } from './modelcard.js';
import {Widget} from './widget.js';
import {WinWidget} from './winwidget';
import {JournalWidget} from './journalwidget';
import {MeditationWidget} from './meditationwidget'; 
import {DiscussionWidget} from './discussionwidget'; 

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
        <GridItem rowSpan={2} colSpan={1} bg='white'><WinWidget></WinWidget></GridItem>
        <GridItem rowSpan={2} colSpan={1} bg='white'><JournalWidget></JournalWidget></GridItem>
        <GridItem rowSpan={2} colSpan={1} bg='white'><MeditationWidget></MeditationWidget></GridItem>
        <GridItem rowSpan={2} colSpan={3} bg='white'><DiscussionWidget></DiscussionWidget></GridItem>
      </Grid>
	);
}