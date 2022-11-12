import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Video } from './video.js';
import { Landing } from './landing.js';

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
                    <p>Landing Page</p>
                </TabPanel>
                <TabPanel>
                    <p>Role Models go here</p>
                </TabPanel>
                <TabPanel>
                    <p>Wins go here</p>
                </TabPanel>
                <TabPanel textAlign='center'>
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
