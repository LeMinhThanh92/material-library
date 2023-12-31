import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box} from "@mui/material";
import {useState} from "react";
import Tab from "@mui/material/Tab";
import MasterItemHome from "./masteritemhome";
import MasterItemAdd from "./masteritemadd";
import {Helmet} from "react-helmet-async";
import MasterItemCompare from "./msitemcompare";
import StackedBarChart from "./msitemcompare/barchart";

function MSDasboard() {

    const [value, setValue] = useState('1');

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (

        <>
            <Helmet><title>Master Item</title></Helmet>
            <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label='Tab MasterItem'>
                        <Tab label="MS Dashboad" value="1"/>
                        <Tab label="Add" value="2"/>
                        <Tab label="Compare" value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <MasterItemHome/>
                </TabPanel>
                <TabPanel value="2">
                    <MasterItemAdd/>
                </TabPanel>
                <TabPanel value="3">
                    <MasterItemCompare/>
                </TabPanel>
            </TabContext>
        </Box>
        </>
    )
}

export default MSDasboard;

