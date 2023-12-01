import {Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, { useState } from "react";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Dayjs} from "dayjs";
import {AddOutlined} from "@mui/icons-material";

interface DataOption {
    id: number;
    data: string;
}

interface Data {
    id: number;
    label: string;
    type: number;
    options: DataOption[];
}

interface SelectedValues {
    [key: number]: string;
}

function FilterTable() {
    const datas: Data[] = [
        {
            id: 1,
            label: 'label1',
            type: 1,
            options: [
                { id: 1, data: 'label1-1' },
                { id: 2, data: 'label1-2' },
            ],
        },
        {
            id: 2,
            label: 'label2',
            type: 2,
            options: [],
        },
        {
            id: 3,
            label: 'label3',
            type: 1,
            options: [
                { id: 5, data: 'label3-1' },
                { id: 6, data: 'label3-2' },
            ],
        },
        {
            id: 4,
            label: 'label1',
            type: 1,
            options: [
                { id: 7, data: 'label1-1' },
                { id: 8, data: 'label1-2' },
            ],
        },
        {
            id: 5,
            label: 'label2',
            type: 2,
            options: [],
        },
        {
            id: 6,
            label: 'label1',
            type: 1,
            options: [
                { id: 9, data: 'label1-1' },
                { id: 10, data: 'label1-2' },
            ],
        },
        {
            id: 7,
            label: 'label2',
            type: 2,
            options: [],
        },
        {
            id: 8,
            label: 'label1',
            type: 1,
            options: [
                { id: 11, data: 'label1-1' },
                { id: 12, data: 'label1-2' },
            ],
        },
        {
            id: 9,
            label: 'label2',
            type: 2,
            options: [],
        },
    ];
    const [dateFrom,setDateFrom]=useState<Dayjs|null>(null)
    const [selectedValues, setSelectedValues] = useState<SelectedValues>({});

    const handleSelectChange = (event: SelectChangeEvent<any>, id: number) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [id]: event.target.value as string,
        }));
    };

    return (
        <>
            <Grid container direction={'row'} justifyContent={'left'} alignItems={'stretch'} spacing={1}>
                {datas.map((data) => (
                    <Grid item xs={12} md={2} key={data.id}>
                        {data.type === 1 ? (
                            <FormControl fullWidth>
                                <InputLabel id={`custom-select-label-${data.id}`}>{data.label}</InputLabel>
                                <Select
                                    labelId={`custom-select-label-${data.id}`}
                                    id={`custom-select-${data.id}`}
                                    value={selectedValues[data.id] || ''}
                                    onChange={(event) => handleSelectChange(event, data.id)}
                                    label={data.label}
                                >
                                    {data.options.map((option) => (
                                        <MenuItem key={option.id} value={option.data}>
                                            {option.data}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ) : (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{width:'100%',height:'100%'}}
                                value={dateFrom}
                                onChange={(newValue) => setDateFrom(newValue)}
                                className={"w-64"}
                                format={"DD/MM/YYYY"}
                                slotProps={{textField: {size: 'medium'}}}
                            /></LocalizationProvider>
                        )
                        }
                    </Grid>
                ))}
                <Grid item xs={12} md={2}>
                    <Button sx={{height:56,width:'100%'}} variant={'outlined'} endIcon={<AddOutlined />}>Add</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default FilterTable;
