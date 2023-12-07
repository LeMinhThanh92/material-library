import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useApi } from '../../utils/utils';
import { Button } from '@mui/material';

type ChartContent = {
    supCode: string;
    rft: number;
};

type ChartInfo = {
    headers: string[];
    content: ChartContent[];
};

export default function TESTDATA() {
    const [pData, setPData] = useState<number[]>([]);
    const [xLabels, setXLabels] = useState<string[]>([]);
    const { data, loading, error } = useApi<ChartInfo>(
        '/api/v1/fabric/rft',
        'get',
        {
            i: 0,
            factory: 'F2',
            year: 2023,
            month: 11,
        }
    );

    useEffect(() => {
        if (data && Array.isArray(data.content)) {
            const supCodeArray = data.content.map((item: ChartContent) => item.supCode);
            const rftArray = data.content.map((item: ChartContent) => item.rft);
            setPData(rftArray);
            setXLabels(supCodeArray);
            console.log(pData)
        }
    }, [data]);

    function handleClick() {

    }

    return (
        <>
            <Button variant={'contained'} onClick={handleClick}>
                Load data
            </Button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error loading data</h1>}
            {pData.length > 0 && !loading && !error && (
                <BarChart
                    sx={{ width: '100%' }}
                    height={300}
                    series={[{ data: pData, label: 'RFT:%', id: 'pvId', stack: 'total' }]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
            )}
        </>
    );
}
