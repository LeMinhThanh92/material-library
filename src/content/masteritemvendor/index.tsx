
import {TabContext, TabList, TabPanel} from "@mui/lab";
import { Box } from "@mui/material";
import {useState} from "react";
import Tab from "@mui/material/Tab";
import MasterItemVendorHome from "./masteritemvendorhome";
import MasterItemVendorAdd from "./masteritemvendoradd";


function MSVendorDasboard() {
    const [value, setValue] = useState('1');

    const handleChange = (e:React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    return(
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label='Tab MasterItem'>
                        <Tab label="MS Dashboad" value="1" />
                        <Tab label="Add" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"> <MasterItemVendorHome/> </TabPanel>
                <TabPanel value="2"><MasterItemVendorAdd /> </TabPanel>
            </TabContext>
        </Box>
    )
}
export default MSVendorDasboard;