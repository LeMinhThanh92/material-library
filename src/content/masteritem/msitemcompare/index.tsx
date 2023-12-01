import {Helmet} from "react-helmet-async";
import MSCompare from "./mscompare";

function MasterItemCompare() {
    return (
        <>
            <Helmet>
                <title>Master Item Compare</title>
            </Helmet>
            <MSCompare />
        </>
    )
}

export default MasterItemCompare;