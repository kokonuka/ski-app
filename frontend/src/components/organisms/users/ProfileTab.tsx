import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { SpinnerBox } from "../../molecules/SpinnerBox";
import { PanelFrame } from "./PanelFrame";
import { Profile } from "./Profile";
import { Contract } from "./Contract";

type Props = {};

const menus = ["profile", "contract"];

export const ProfileTab: React.FC<Props> = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const menu = router.query.menu;
    if (!menu) return;
    setIsLoading(false);
    const foundIndex = menus.findIndex((menuInMenus) => menu == menuInMenus);
    setCurrentTabIndex(foundIndex);
  }, [router]);

  const handleChange = (newTabIndex: number) => {
    setCurrentTabIndex(newTabIndex);
    router.push(`/users/1/${menus[newTabIndex]}`);
  };

  if (isLoading) {
    return (
      <Box mt="24" display="flex" justifyContent="center">
        <SpinnerBox />
      </Box>
    );
  }

  return (
    <Tabs
      mt="10"
      position="relative"
      index={currentTabIndex}
      onChange={handleChange}
    >
      <TabList>
        <Tab>プロフィール</Tab>
        <Tab>契約</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <PanelFrame>
            <Profile />
          </PanelFrame>
        </TabPanel>
        <TabPanel>
          <PanelFrame>
            <Contract />
          </PanelFrame>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
