import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';
import { RoomSection } from '../../../pages/sections/HeroSection';
import { RoomPostForm } from '../forms/RoomPostForm';
import { UpdateUserForm } from '../forms/updateUserForm';
import { CardShowSection } from '../../../pages/sections/CardShowSection';

export default function LabTabs({userData,userPost,userBooking,tabId}) {
  const [value, setValue] = React.useState(tabId ? tabId : '1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={<h6 className="mb-1 ">Update <span className="text-primary text-uppercase"> Information</span></h6>}
              value="1" />
            <Tab
              label={<h6 className="mb-1 ">Add <span className="text-primary text-uppercase"> Post</span></h6>}

              value="2" />
            <Tab
              label={<h6 className="mb-1 ">Manage <span className="text-primary text-uppercase">Posts</span></h6>}
              value="3" />
            <Tab
               label={<h6 className="mb-1 ">Booking <span className="text-primary text-uppercase">Info</span></h6>}
              value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Container>
            <Box mt={2} >
               <UpdateUserForm userData={userData} />
            </Box>
          </Container>

        </TabPanel>
        <TabPanel value="2">
          <Container >
            <Box mt={2} >
              <RoomPostForm userData={userData} />
            </Box>
          </Container>
        </TabPanel>
        <TabPanel value="3">
          <RoomSection roomsDate={ userPost  ? userPost : []  } userData={userData} pathPost={false} />
        </TabPanel>
        <TabPanel value="4">
          <CardShowSection userBooking={userBooking} />
        </TabPanel>

      </TabContext>
    </Box>
  );
}