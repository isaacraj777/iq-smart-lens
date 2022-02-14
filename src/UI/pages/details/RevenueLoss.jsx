import React, { useCallback, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Avatar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Sidebar } from "../../components/Sidebar";
import { AppBar } from '../../components/AppBar';
import { Main } from '../../components/MainContent';
import { DrawerHeader } from '../../components/DrawerHeader'
import { appData } from '../../util/constants';
import { revenueStyles as styles } from '../details/RevenueStyles';
import { data } from '../../util/data'
import { SimpleTable as Table } from '../../components/Table';
import { Line } from "react-chartjs-2";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
export const RevenueLoss = () => {

    const [open, setOpen] = React.useState(true);
    const [specialty, setSpecialty] = React.useState('');
    const [region, setRegion] = React.useState('');
    const [revData, setData] = React.useState(data.providers.filter(item => item.type==='revenueLoss'));
    const [labels, setLabels] = React.useState(appData.revChartLabels);
    const [chartData, setChartData] = React.useState(appData.revChartData);
    const [pointColor, setPointColor] = React.useState(appData.revPointColors);

    const handleSpecialty = useCallback((event) => {
        console.log('Entered here!!')
        if(event.target.value === '') {
            setData(data.providers.filter(item => item.type==='revenueLoss'));
            setSpecialty(event.target.value);
            setChartData(appData.revChartData);
            setLabels(appData.revChartLabels);
            setPointColor(appData.revPointColors);
        }
        else{
            setSpecialty(event.target.value);
            const newData = data.providers.filter(item => item.type==='revenueLoss').filter(item => item.specialtyId === event.target.value);
            let labelArr = [];
            let networkData = [];
            let globalData = [];
            let newPointNet = [];
            let newPointGlobal = [];
            for(let dat of newData) {
                networkData.push(dat.networkScore);
                globalData.push(dat.globalScore);
                labelArr.push("");
                labelArr.push("");
            }
            let newArrLength = [...networkData, ...globalData].length / 2;
            console.log(newArrLength);
            for (let i=1; i <= newArrLength; i++) {
                console.log('Color');
                newPointNet.push("#FFBB33");
                newPointGlobal.push("#131FB5");
            }
            setChartData([...networkData, ...globalData]);
            setLabels(labelArr);
            console.log([...newPointNet, ...newPointGlobal]);
            setPointColor([...newPointNet, ...newPointGlobal]);
            setData(newData);
        }
      },[]);

    const handleRegion = (event) => {
        setRegion(event.target.value)
    }

    Chart.register(
        ArcElement,
        LineElement,
        BarElement,
        PointElement,
        BarController,
        BubbleController,
        DoughnutController,
        PieController,
        PolarAreaController,
        RadarController,
        ScatterController,
        CategoryScale,
        LinearScale,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale,
        TimeSeriesScale,
        Decimation,
        Filler,
        Tooltip,
        Title,
        SubTitle
      );
      
      /* useEffect(() => {
          handleSpecialty();
      },[refresh]) */

    return (
      <Box sx={{ display: "flex" }}>
        <AppBar open={open} setOpen={setOpen} title={"Go Back"} />
        <Sidebar open={open} setOpen={setOpen} />
        <Main open={open} sx={{ mt: 5, paddingLeft: 5 }}>
          <DrawerHeader />
          <Typography variant="h9">Potential Revenue Loss</Typography>
          <DrawerHeader />
          <Grid container sx={{ flexGrow: 1 }} spacing={2}>
            <Grid
              item
              container
              xs={12}
              justifyContent="flex-start"
              spacing={10}
            >
              {appData.revenueLossCards.map((data) => (
                <Grid item>
                  <Paper sx={styles.revenueCard} elevation={12}>
                    <Avatar variant="rounded" sx={data.styles}>
                      {data.icon}
                    </Avatar>
                    <Typography variant="caption">{data.title}</Typography>
                    <Typography variant="h5" sx={data.textColor}>
                      {data.data}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
              <Grid item>
                <Paper
                  sx={{
                    height: "183px",
                    width: "380px",
                    display: "flex",
                    // flexWrap: "wrap",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: 0,
                    border: "1px solid #E2E8F0",
                    // textAlign: 'center'
                  }}
                  elevation={12}
                >
                  <Line
                    data={{
                      labels: labels,
                      datasets: [
                        {
                          data: chartData,
                          // fill: true,
                          tension: 0.4,
                          // backgroundColor: "rgba(19, 31, 181, 0.3)",
                          borderColor: "#131FB5",
                          borderWidth: 1,
                          // borderJoinStyle: 'bevel',
                          pointStyle: "circle",
                          pointBorderColor: pointColor,
                          pointBackgroundColor: pointColor,
                          pointRadius: 4,
                        },
                      ],
                    }}
                    options={{
                      layout: {
                        padding: 15,
                      },
                      scales: {
                        y: {
                          title: {
                            text: "Standard Deviation",
                            display: true,
                          },
                        },
                        x: {
                          ticks: {
                            display: false,
                          },
                        },
                      },
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <DrawerHeader />
          <FormControl>
            <InputLabel id="select-label">Specialty</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={specialty}
              label="Specialty"
              onChange={handleSpecialty}
              sx={styles.dropDown}
              autoWidth
            >
              <MenuItem value="">All</MenuItem>
              {data.specialties.map((item) => {
                return (
                  <MenuItem value={item.specialtyId}>{item.specialty}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="region-label">Region</InputLabel>
            <Select
              labelId="region-label"
              id="region-select"
              value={region}
              label="Region"
              onChange={handleRegion}
              sx={styles.dropDown}
              autoWidth
            >
              <MenuItem value="">All</MenuItem>
              {data.regions.map((item) => {
                return <MenuItem value={item.regionId}>{item.region}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <DrawerHeader />
          <Table
            data={revData}
            setData={setData}
            setChartData={setChartData}
            setLabels={setLabels}
            setPointColor={setPointColor}
            dataRef={data}
          />
        </Main>
      </Box>
    );
}

export default RevenueLoss;