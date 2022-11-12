import { WinCard } from './wincard.js';
import { SimpleGrid } from '@chakra-ui/react'

export function Wins(){
    return(
        <SimpleGrid columns={5} spacing={10}>
            <WinCard 
                imageUrl='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg'
                imageAlt='Doggo'
                title='Trained Doggo all by myself!'
                description='I took Doggo in when he was 2 months old. he is the absolute light of my life. 2 years later and he is all trained!'
                thought='Pog'
                rating='4'
                date='September 19, 2022'
            ></WinCard>
            <WinCard 
                imageUrl='https://external-preview.redd.it/ejvQiKcrJwiZbF3gGWYct_8VoXNF5SX7QUgmLE5bjxY.jpg?auto=webp&s=d8f39ed67f0db68e8574eb186ae319114967513e'
                imageAlt='Titration'
                title='Perfect titration on the first try!'
                description='Titration is a common laboratory method of quantitative chemical analysis to determine the concentration of an identified analyte.'
                thought='Tutti frutti'
                rating='3'
                date='June 7, 2022'
            ></WinCard>
            <WinCard 
                imageUrl='https://docs.github.com/assets/cb-87213/images/help/pull_requests/pull-request-review-edit-branch.png'
                imageAlt='PR'
                title='First Pull Request!'
                description='Made a pull request at work to implement a new feature.'
                thought='-git commit'
                rating='5'
                date='May 27, 2022'
            ></WinCard>
            <WinCard 
                imageUrl='https://pbs.twimg.com/media/E_GjnYUXMAUW9Yn.png'
                imageAlt='Pi'
                title='Proved that pi=3'
                description='They said I could never do it, that it wouldnt be proper, that I would make a fool of myself. Behold your fears.'
                thought='MWAHAHAHAHA'
                rating='5'
                date='January 4, 2022'
            ></WinCard>
            <WinCard 
                imageUrl='https://www.gspgroup.ca/wp-content/uploads/2022/03/UofW-SouthCommon_banner-2000x1132.jpg'
                imageAlt='UW'
                title='Started Engineering at UW!'
                description='I just started my first day at UW! Tron seems like a fun program. Some of the upper years are really nice and gave us stickers. They say tron was a mistake...'
                thought='THE TOOL'
                rating='5'
                date='September 4, 2021'
            ></WinCard>
        </SimpleGrid>
    );
}