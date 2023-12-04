// import React, { useState } from 'react';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { Card, CardContent, Grid, Typography } from "@mui/material";
// import {DndProvider, useDrag, useDrop} from "react-dnd";
//
// const DraggableCard = () => {
//     const [leftItems, setLeftItems] = useState<string[]>(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
//     const [rightItems, setRightItems] = useState<string[]>(Array.from({ length: 10 }, (_, i) => `Item ${i + 11}`));
//
//     const handleDrop = (index: number, sourceArray: string[], destinationArray: string[]) => {
//         const draggedItem = sourceArray[index];
//         const newSourceArray = sourceArray.filter((_, i) => i !== index);
//         const newDestinationArray = [...destinationArray, draggedItem];
//
//         sourceArray === leftItems ? setLeftItems(newSourceArray) : setRightItems(newSourceArray);
//         destinationArray === rightItems ? setRightItems(newDestinationArray) : setLeftItems(newDestinationArray);
//     };
//
//     const DraggableItem = ({ index, text, sourceArray, destinationArray }: { index: number; text: string; sourceArray: string[]; destinationArray: string[] }) => {
//         const [, drag] = useDrag({
//             type: 'ITEM',
//             item: { index, text, sourceArray, destinationArray },
//         });
//
//         const [, drop] = useDrop({
//             accept: 'ITEM',
//             drop: (item: any) => handleDrop(item.index, item.sourceArray, item.destinationArray),
//         });
//
//         return (
//             <div ref={(node) => drag(drop(node))}>
//                 <Card>
//                     <CardContent>
//                         <Typography variant={'h5'}>{text}</Typography>
//                     </CardContent>
//                 </Card>
//             </div>
//         );
//     };
//
//     return (
//         <DndProvider backend={HTML5Backend}>
//             <Grid container direction={'row'} justifyContent={'center'} alignItems={'stretch'} spacing={1}>
//                 <Grid item xs={12} md={6}>
//                     <h2>Left Items</h2>
//                     {leftItems.map((item, index) => (
//                         <DraggableItem key={index} index={index} text={item} sourceArray={leftItems} destinationArray={rightItems} />
//                     ))}
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <h2>Right Items</h2>
//                     {rightItems.map((item, index) => (
//                         <DraggableItem key={index} index={index} text={item} sourceArray={rightItems} destinationArray={leftItems} />
//                     ))}
//                 </Grid>
//
//             </Grid>
//         </DndProvider>
//     );
// };
//
// export default DraggableCard;

import React, {useState} from 'react';
import {DndProvider, useDrag, useDrop, DropTargetMonitor} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {Box, Card, CardContent, Paper} from "@mui/material";

interface ListItem {
    id: number;
    text: string;
}

interface DraggableItemProps {
    index: number;
    item: ListItem;
    listIndex: number;
}

const DraggableItem: React.FC<DraggableItemProps> = ({index, item, listIndex}) => {
    const [, drag] = useDrag({
        type: 'ITEM',
        item: {index, listIndex},
    });

    return (
        <Card sx={{marginBottom:2}}>
            <CardContent ref={drag}>
                {item.text}
            </CardContent>
        </Card>
    );
};

interface DroppableListProps {
    list: ListItem[];
    index: number;
    onDrop: (draggedListIndex: number, droppedListIndex: number, draggedIndex: number, droppedIndex: number) => void;
}

const DroppableList: React.FC<DroppableListProps> = ({list, index, onDrop}) => {
    const [, drop] = useDrop({
        accept: 'ITEM',
        drop: (item: DraggableItemProps, monitor: DropTargetMonitor) => {
            const draggedListIndex = item.listIndex;
            const droppedListIndex = index;
            const draggedIndex = item.index;
            const droppedIndex = list.length;

            onDrop(draggedListIndex, droppedListIndex, draggedIndex, droppedIndex);
        },
    });

    return (
        <Box ref={drop} sx={{flex: 1, padding: 2}}>
            {list.map((item, i) => (
                <DraggableItem key={item.id} index={i} item={item} listIndex={index}/>
            ))}
        </Box>
    );
};

const ThreeListDragDrop: React.FC = () => {
    const [lists, setLists] = useState<ListItem[][]>([
        [{id: 1, text: 'Item 1'}, {id: 2, text: 'Item 2'}, {id: 3, text: 'Item 3'}],
        [{id: 4, text: 'Item 4'}, {id: 5, text: 'Item 5'}, {id: 6, text: 'Item 6'}],
        [{id: 7, text: 'Item 7'}, {id: 8, text: 'Item 8'}, {id: 9, text: 'Item 9'}],
        [{id: 10, text: 'Item 10'}, {id: 11, text: 'Item 11'}, {id: 12, text: 'Item 12'}],
    ]);

    const handleDrop = (
        draggedListIndex: number,
        droppedListIndex: number,
        draggedIndex: number,
        droppedIndex: number
    ) => {
        const updatedLists = [...lists];
        const [draggedItem] = updatedLists[draggedListIndex].splice(draggedIndex, 1);
        updatedLists[droppedListIndex].splice(droppedIndex, 0, draggedItem);

        setLists(updatedLists);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Box display="flex" gap={2}>
                {lists.map((list, index) => (
                    <Paper key={index} elevation={3} sx={{flex: 1,borderRadius:'16px'}}>
                        <DroppableList list={list} index={index} onDrop={handleDrop}/>
                    </Paper>
                ))}
            </Box>
        </DndProvider>
    );
};

export default ThreeListDragDrop;

