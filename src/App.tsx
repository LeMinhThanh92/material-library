import {BrowserRouter, Route, Routes} from 'react-router-dom';

import LoginPage from "./content/login";
import SidebarLayout from "./layouts/SidebarLayout";
import MSDasboard from "./content/masteritem";

import MSGroupDasboard from "./content/masteritemgroup";
import MSColorDasboard from "./content/masteritemcolor";
import MSVendorDasboard from "./content/masteritemvendor";
import {HelmetProvider} from "react-helmet-async";
import {createContext, useMemo, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {blue} from "@mui/material/colors";
import {SnackbarProvider} from "notistack";

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

export default function App() {

    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: blue[500]
                    },
                    mode,
                    ...(mode === 'dark'
                        ? {
                            primary: {
                                main: '#2196F5',
                            },
                            text: {
                                primary: '#D7D7D9',
                            },
                            background: {
                                default: '#333333',
                                paper: '#222222',
                            },
                        }
                        : {}),
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path={'/'} element={<LoginPage/>}></Route>
                                <Route path={'/login'} element={<LoginPage/>}></Route>
                                <Route path={'/ms'} element={<SidebarLayout/>}>
                                    <Route path={'/ms/home'} element={<MSDasboard/>}></Route>
                                </Route>
                                <Route path={'/msg'} element={<SidebarLayout/>}>
                                    <Route path={'/msg/home'} element={<MSGroupDasboard/>}></Route>
                                </Route>
                                <Route path={'/cl'} element={<SidebarLayout/>}>
                                    <Route path={'/cl/home'} element={<MSColorDasboard/>}></Route>
                                </Route>
                                <Route path={'/vd'} element={<SidebarLayout/>}>
                                    <Route path={'/vd/home'} element={<MSVendorDasboard/>}></Route>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </SnackbarProvider>
                </HelmetProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}
