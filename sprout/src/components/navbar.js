import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Video } from './video.js';
import { Landing } from './landing.js';
import { Wins } from './wins.js';

export function NavBar() {
	return (
		<Tabs isFitted variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab>Home</Tab>
                <Tab>Role Models</Tab>
                <Tab>Wins</Tab>
                <Tab>Meditation</Tab>
                <Tab>Discussion</Tab>
                <Tab>Journal</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Landing></Landing>
                </TabPanel>
                <TabPanel>
                    <p>Role Models go here</p>
                </TabPanel>
                <TabPanel>
                    <div className='Page-header'>Wins - Remind yourself of your accomplishments!</div>
                    <Wins></Wins>
                </TabPanel>
                <TabPanel>
                    <Video></Video>
                </TabPanel>
                <TabPanel>
                    <p>Blah Blah Blah</p>
                </TabPanel>
                <TabPanel>
                    <p>Write write</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
	);
}
