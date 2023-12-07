import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useApi } from '../../../utils/utils';

type ChartContent = {
    supCode: string;
    rft: number;
};

type ChartInfo = {
    headers: string[];
    content: ChartContent[];
};

export default function StackedBarChart() {
    const { data, loading, error } = useApi<ChartInfo>('/api/v1/fabric', 'get', {
        i: '0',
        factory: 'F2',
        year: '2023',
        month: '11',
    });

    console.log(data);

    // const supCodeArray: string[] = data?.content.map((item: ChartContent) => item.supCode) || [];
    // const rftArray: number[] = data?.content.map((item: ChartContent) => item.rft) || [];
    //
    // const pData: number[] = rftArray || [];
    // const xLabels: string[] = supCodeArray || [];

    return (
        // <BarChart
        //     width={500}
        //     height={300}
        //     series={[{ data: pData, label: 'pv', id: 'pvId', stack: 'total' }]}
        //     xAxis={[{ data: xLabels, scaleType: 'band' }]}
        // />
        <h1>1231</h1>
    );
}
