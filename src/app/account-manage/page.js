'use client'
import { useCallback, useState } from 'react';
import { subDays, subHours, subMinutes, subMonths } from 'date-fns';
import { Box, Container, Divider, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useMockedUser } from 'src/hooks/use-mocked-user';
// import { usePageView } from 'src/hooks/use-page-view';
import { AccountBillingSettings } from 'src/app/section/account/account-billing-settings';
import { AccountGeneralSettings } from 'src/app/section/account/account-general-settings';
import { AccountNotificationsSettings } from 'src/app/section/account/account-notifications-settings';
import { AccountTeamSettings } from 'src/app/section/account/account-team-settings';
import { AccountSecuritySettings } from 'src/app/section/account/account-security-settings';
import Sidebar from '../sidebar/page';
import Navbar from '../navbar/page';

const now = new Date();

const tabs = [
  { label: 'General', value: 'general' },
  { label: 'Billing', value: 'billing' },
  { label: 'Team', value: 'team' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Security', value: 'security' }
];

const Page = () => {
  const user = useMockedUser();
  const [currentTab, setCurrentTab] = useState('general');
  const [expanded, setExpanded] = useState(true);
  //   usePageView();

  const handleTabsChange = useCallback((event, value) => {
    setCurrentTab(value);
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', fontFamily:'Plus Jakarta Sans' }}>
        <Sidebar expanded={expanded} />
        <Box sx={{ width: "100%" }}>
          <Navbar expanded={expanded} setExpanded={setExpanded} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8
            }}
          >
            <Container maxWidth="xl">
              <Stack
                spacing={3}
                sx={{ mb: 3, }}
              >
                <Typography variant="h4" sx={{fontWeight: 'bold', fontFamily: 'Plus Jakarta Sans', fontSize:'32px'}}>
                  Account
                </Typography>
                <div>
                  <Tabs
                    indicatorColor="primary"
                    onChange={handleTabsChange}
                    scrollButtons="auto"
                    textColor="primary"
                    value={currentTab}
                    variant="scrollable"
                    sx={{textTransform: 'lowercase' }}
                  >
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                      />
                    ))}
                  </Tabs>
                  <Divider />
                </div>
              </Stack>
              {currentTab === 'general' && (
                <AccountGeneralSettings
                  avatar={user.avatar || ''}
                  email={user.email || ''}
                  name={user.name || ''}
                />
              )}
              {currentTab === 'billing' && (
                <AccountBillingSettings
                  plan="standard"
                  invoices={[
                    {
                      id: '5547409069c59755261f5546',
                      amount: 4.99,
                      createdAt: subMonths(now, 1).getTime()
                    },
                    {
                      id: 'a3e17f4b551ff8766903f31f',
                      amount: 4.99,
                      createdAt: subMonths(now, 2).getTime()
                    },
                    {
                      id: '28ca7c66fc360d8203644256',
                      amount: 4.99,
                      createdAt: subMonths(now, 3).getTime()
                    }
                  ]}
                />
              )}
              {currentTab === 'team' && (
                <AccountTeamSettings
                  members={[
                    {
                      avatar: '/public/image/little.png',
                      email: 'cao.yu@devias.io',
                      name: 'Cao Yu',
                      role: 'Owner'
                    },
                    {
                      avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
                      email: 'siegbert.gottfried@devias.io',
                      name: 'Siegbert Gottfried',
                      role: 'Standard'
                    }
                  ]}
                />
              )}
              {currentTab === 'notifications' && <AccountNotificationsSettings />}
              {currentTab === 'security' && (
                <AccountSecuritySettings
                  loginEvents={[
                    {
                      id: '1bd6d44321cb78fd915462fa',
                      createdAt: subDays(subHours(subMinutes(now, 5), 7), 1).getTime(),
                      ip: '95.130.17.84',
                      type: 'Credential login',
                      userAgent: 'Chrome, Mac OS 10.15.7'
                    },
                    {
                      id: 'bde169c2fe9adea5d4598ea9',
                      createdAt: subDays(subHours(subMinutes(now, 25), 9), 1).getTime(),
                      ip: '95.130.17.84',
                      type: 'Credential login',
                      userAgent: 'Chrome, Mac OS 10.15.7'
                    }
                  ]}
                />
              )}
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};


export default Page;