import { SimpleGrid } from '@chakra-ui/react'
import { LandingWidget } from './modelcard.js'

export function RoleModel(){
    return(
        <SimpleGrid columns={5} spacing={10}>
            <LandingWidget></LandingWidget>
            <LandingWidget></LandingWidget>
            <LandingWidget></LandingWidget>
            <LandingWidget></LandingWidget>
            <LandingWidget></LandingWidget>
        </SimpleGrid>
    );
}