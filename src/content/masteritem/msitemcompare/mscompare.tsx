import {
    Button,
    Card, CardActionArea,
    CardContent, CardMedia,
    Grid,
    Typography
} from "@mui/material";
import {MuiAutocomplete} from "../../muicomponent/autocomplete";
import {AddOutlined, SearchOutlined} from "@mui/icons-material";
import MSTable from "../masteritemhome/msitemhometable";
import FilterTable from "./filter";
import MuiTransferList from "./transferlist";
import {useSnackbar, VariantType} from "notistack";

function MSCompare() {
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant: VariantType,text:string) => () => {
        enqueueSnackbar(text, { variant });
    };

    return (
        <>
            <Grid container
                  justifyContent={'left'}
                  alignItems={'stretch'}
                  spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent>
                            <Typography variant={'h4'} component={'h4'} gutterBottom>
                                Find and Compare Master Item
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Card>
                        <CardContent>
                            <Grid container justifyContent={'left'} alignItems={'stretch'} spacing={1}>
                                <Grid item xs={12} md={3}>
                                    <MuiAutocomplete labelname={'Input Master Item code'}/>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                   <Button fullWidth variant={'contained'} sx={{height:56}} endIcon={<AddOutlined />}>
                                       Add
                                   </Button>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <MuiAutocomplete labelname={'Options'}/>
                                </Grid>
                                <Grid item xs={12} md={1.5}>
                                    <Button fullWidth variant={'contained'} sx={{height:56}} endIcon={<SearchOutlined />}>
                                        Find Similar
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FilterTable />
                </Grid>
                <Grid item xs={12} md={12}>
                    <MSTable />
                </Grid>
                {/*<Grid item xs={12} md={12}>*/}
                {/*    <CardActionArea>*/}
                {/*        <CardMedia*/}
                {/*            component="video"*/}
                {/*            controls*/}
                {/*            src="http://192.168.1.248/Videos/tivi.mp4"*/}
                {/*            height="140"*/}
                {/*        />*/}
                {/*    </CardActionArea>*/}
                {/*</Grid>*/}
                <Grid item xs={12} md={12}>
                    <MuiTransferList />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button onClick={handleClickVariant('error','DATAAAA')}>Show success snackbar</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default MSCompare;