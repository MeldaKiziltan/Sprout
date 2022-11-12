import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react';
import { Video } from './video.js';
import { Landing } from './landing.js';
import { Wins } from './wins.js';
import { RoleModel } from './rolemodel.js';
import discussion from './Discussion.png'

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
                    <div className='Page-header'>Past Role Models of the day. STEMimists, if you will</div>
                    <RoleModel></RoleModel>
                </TabPanel>
                <TabPanel>
                    <div className='Page-header'>Wins - Remind yourself of your accomplishments!</div>
                    <Wins></Wins>
                </TabPanel>
                <TabPanel>
                    <Video></Video>
                </TabPanel>
                <TabPanel>
                    <Center>
                        <img src={discussion} width='1200px'/>
                    </Center>
                </TabPanel>
                <TabPanel>
                    <p> Write</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
	);
}
