import {
    Avatar,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton, Stack,
    Typography
} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {InputLabelMui} from "../muicomponent/inputlabel";
import {PersonOutline, VisibilityOffOutlined, VisibilityOutlined} from '@mui/icons-material';
import axios from 'axios';
import {useSnackbar} from "notistack";

function LgPage() {

    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showpass, setShowpass] = useState(false)
    const [hasError, setError] = useState(false)
    const onClickShowpass = () => {
        setShowpass(!showpass)
    }

    const onMouseDownPass = (e: any) => {
        e.preventDefault();
    }

    const onSubmitlogin = (e: any) => {
        axios.post('http://14.241.167.185:8080/api/v1/user/authenticate', {
            'username': username,
            'password': password
        }).then(r => {
            if (r.status === 200) {
                let data = r.data
                localStorage.setItem('user', JSON.stringify(data))
                // navigate('/ms/home')
                navigate('/ms/home', {state: {data}})
            } else if (r.status === 401) {
                // setOpenDialog(true)
                setError(true)
            }
        }).catch(() => {
            setError(true)
            enqueueSnackbar('Login Fail',{variant:'warning',anchorOrigin:{vertical:'bottom',horizontal:'right'}})
        })
    }

    return (
        <>
            <Grid
                container
                direction={'row'}
                justifyContent={'center'}
                alignItems={'stretch'}
                sx={{height: '100vh'}}
                spacing={1}
            >
                <Grid item xs={12} md={6} alignItems={'center'}>
                    <Grid container
                          direction={'row'}
                          justifyContent={'center'}
                          alignItems={'center'}
                          sx={{height: '100vh'}}
                    >
                        <Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
                            <Card>
                                <CardContent sx={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Stack spacing={2}>
                                        <Typography variant="h4" gutterBottom>
                                            Login
                                        </Typography>

                                        <InputLabelMui
                                            id='outline-username'
                                            labelName='Username'
                                            valueName={username}
                                            setValue={setUsername}
                                            inputError={hasError}
                                            type='text'
                                            endAdornment={<PersonOutline/>}
                                        />

                                        <InputLabelMui
                                            id='outline-password'
                                            labelName='Password'
                                            valueName={password}
                                            setValue={setPassword}
                                            inputError={hasError}
                                            type={showpass ? 'text' : 'password'}
                                            endAdornment={<IconButton
                                                onClick={onClickShowpass}
                                                onMouseDown={onMouseDownPass}
                                                edge={'end'}>
                                                {
                                                    showpass ? <VisibilityOffOutlined/> : <VisibilityOutlined/>
                                                }
                                            </IconButton>}
                                        />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            disableRipple
                                            onClick={onSubmitlogin}
                                        >
                                            Login
                                        </Button></Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Avatar
                        variant={'square'}
                        alt={'Login'}
                        src={'/static/images/avatars/office.JPG'}
                        sx={{height: '100%', width: '100%', borderRadius: '16px 0 0 10px'}}
                    />
                </Grid>
            </Grid>
        </>
    );
}
export default LgPage;

