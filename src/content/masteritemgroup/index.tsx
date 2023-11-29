
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box} from "@mui/material";
import {useState} from "react";
import Tab from "@mui/material/Tab";
import MasterItemGroupHome from "./masteritemgrouphome";
import MasterItemGroupAdd from "./masteritemgroupadd";
import {Helmet} from "react-helmet-async";


function MSGroupDasboard() {
    const [value, setValue] = useState('1');

    const handleChange = (e:React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };


    return(
        <>
            <Helmet><title>Group</title></Helmet>
            <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label='Tab MasterItem'>
                        <Tab label="MS Dashboad" value="1"/>
                        <Tab label="Add" value="2"/>
                    </TabList>
                </Box>
                <TabPanel value="1"> <MasterItemGroupHome/> </TabPanel>
                <TabPanel value="2"><MasterItemGroupAdd/> </TabPanel>
            </TabContext>
        </Box></>
    )
}
export default MSGroupDasboard;