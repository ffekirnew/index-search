import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import NavBar from "../../components/dashboard/NavBar";

const DashboardLayout = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"aside main"
             "aside main"`,
        base: `"navbar"
           "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "auto minmax(0, 1fr)",
      }}
      templateRows={"60px auto"}
      height={"100vh"}
    >
      <Show above="lg">
        <GridItem area={"aside"}>
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area={"main"} overflowY={"scroll"} paddingX={5}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DashboardLayout;
