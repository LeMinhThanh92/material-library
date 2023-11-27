import { useRoutes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import router from "./router";
import { Helmet } from "react-helmet-async";


export default  function App() {
    const content = useRoutes(router);

    return (
        <><Helmet>
            <title>Material Library</title>
        </Helmet>
            <CssBaseline />
            {content}
        </>
    );
}
