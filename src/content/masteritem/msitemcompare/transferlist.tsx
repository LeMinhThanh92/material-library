import React, { useState } from 'react';
import { List, ListItem, Button, Paper, Typography, Checkbox, Grid } from '@mui/material';
import {KeyboardDoubleArrowLeftOutlined, KeyboardDoubleArrowRightOutlined} from "@mui/icons-material";

const MuiTransferList = () => {
    const [leftItems, setLeftItems] = useState<string[]>(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
    const [rightItems, setRightItems] = useState<string[]>(Array.from({ length: 10 }, (_, i) => `Item ${i + 10}`));
    const [leftChecked, setLeftChecked] = useState<number[]>([]);
    const [rightChecked, setRightChecked] = useState<number[]>([]);

    const handleToggle = (value: number, list: 'left' | 'right') => {
        if (list === 'left') {
            const currentIndex = leftChecked.indexOf(value);
            const newChecked = [...leftChecked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setLeftChecked(newChecked);
        } else if (list === 'right') {
            const currentIndex = rightChecked.indexOf(value);
            const newChecked = [...rightChecked];

            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setRightChecked(newChecked);
        }
    };

    const handleTransfer = (direction: string) => {
        if (direction === 'leftToRight') {
            const selectedItems = leftItems.filter((item, index) => leftChecked.includes(index));

            setLeftItems(leftItems.filter((item, index) => !leftChecked.includes(index)));
            setRightItems([...rightItems, ...selectedItems]);
            setLeftChecked([]);
        } else if (direction === 'rightToLeft') {
            const selectedItems = rightItems.filter((item, index) => rightChecked.includes(index));

            setRightItems(rightItems.filter((item, index) => !rightChecked.includes(index)));
            setLeftItems([...leftItems, ...selectedItems]);
            setRightChecked([]);
        }
    };

    const listStyle = {
        height: '300px',
        overflowY: 'auto',
    };

    return (
        <>
            <Grid container direction={'row'} justifyContent={'left'} alignItems={'stretch'}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} style={{ padding: '16px' }}>
                        <Typography variant="h6">Left List</Typography>
                        <List sx={listStyle}>
                            {leftItems.map((item, index) => (
                                <ListItem key={index}>
                                    <Checkbox
                                        edge="start"
                                        checked={leftChecked.includes(index)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${index}` }}
                                        onClick={() => handleToggle(index, 'left')}
                                    />
                                    {item}
                                </ListItem>
                            ))}
                        </List>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={1} justifyContent={'center'} alignItems={'center'}>
                    <Button sx={{mt:'140px'}} fullWidth endIcon={<KeyboardDoubleArrowRightOutlined />} onClick={() => handleTransfer('leftToRight')}></Button>
                    <Button fullWidth endIcon={<KeyboardDoubleArrowLeftOutlined/>} onClick={() => handleTransfer('rightToLeft')}></Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} style={{ padding: '16px'}}>
                        <Typography variant="h6">Right List</Typography>
                        <List sx={listStyle}>
                            {rightItems.map((item, index) => (
                                <ListItem key={index}>
                                    <Checkbox
                                        edge="start"
                                        checked={rightChecked.includes(index)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': `checkbox-list-label-${index}` }}
                                        onClick={() => handleToggle(index, 'right')}
                                    />
                                    {item}
                                </ListItem>
                            ))}
                        </List>

                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default MuiTransferList;
