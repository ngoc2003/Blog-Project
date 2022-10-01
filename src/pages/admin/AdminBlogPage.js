import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListBlog from "../../section/admin/ListBlog";
import AddBlog from "../../section/admin/AddBlog";

export default function AdminBlogPage() {
  const [value, setValue] = React.useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Add Blog" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ListBlog></ListBlog>
        </TabPanel>
        <TabPanel value="2">
          <AddBlog></AddBlog>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
