import React, { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from '@mui/material/Box';
  
  export default function BasicCard() {
    interface Driver {
        id: number
        code: string
        firstname: string
        lastname: string
        country: string
        team: string
        place: number
        imgUrl: string
    }
    const [drivers, setDrivers] = useState<Driver[]>([])
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        return axios.get('http://localhost:8080/api/drivers').then((response) => {
            setDrivers(response.data)
            setLoading(false);
        })
      };

    const overTake = (id:any) => {
        return axios.post(`http://localhost:8080/api/drivers/${id}/overtake`).then((response) => {
            setDrivers(response.data)
            setLoading(false);
        })
    }

    useEffect(()=> {
        fetchData()
    }, [])


    return loading ? (<h1>Loading...</h1>) : (
                <Box sx={{ flexGrow: 1, width: 900, height: 900, margin: 'auto' }}>
                    <Grid container spacing={3} >
                        {drivers.map(elem => (
                            <Grid item xs={4} key={drivers.indexOf(elem)}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                           {elem.firstname} {elem.lastname}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                           Team: {elem.team}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                           Position: {elem.place}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                           Country: {elem.code}
                                        </Typography>
                                        <div>
                                            <img style={{maxHeight: 200}} src={`http://localhost:8080/static/${elem.code.toLowerCase()}.png`} alt={elem.lastname} />
                                        </div>
                                    </CardContent>
                                    <CardActions style={{justifyContent: 'center', paddingBottom: '2em'}}>
                                        <Button 
                                            variant="contained" 
                                            size="small" 
                                            startIcon={<ArrowBackIosNewIcon/>}
                                            onClick={() => overTake(elem.id)}>
                                                Overtake
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
    );
  }