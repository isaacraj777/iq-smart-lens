import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Info from '@mui/icons-material/Info';
import { Avatar, Grid, Link, Paper, Tooltip } from '@mui/material';
import { Doughnut, Pie } from 'react-chartjs-2';
import {Chart, ArcElement, Title, Tooltip as ChartToolTip} from 'chart.js';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { appData } from '../../util/constants'
import { DrawerHeader } from '../../components/DrawerHeader'
import { AppBar } from '../../components/AppBar';
import { Sidebar } from '../../components/Sidebar';
import { dasboardStyles as styles} from '../dashboard/DashboardStyles';
import {  Main } from '../../components/MainContent'

export const PersistentDrawerLeft = () => {
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const rafDiff = '0.70';
  let needleVal;

  const guageNeedle = {
      id: 'guageNeedle',
      afterDatasetsDraw(chart, args, options) {
          const { ctx, data, chartArea: { top, bottom, left, right, width, height} } = chart;

          ctx.save();
          const needleValue = data.datasets[0].needleValue;
          const dataTotal = data.datasets[0].data.reduce((a,b) => a + b, 0);
          const angle = Math.PI + (1 / dataTotal) * needleValue * Math.PI;
          const cx = width / 2;
          const cy = chart._metasets[0].data[0].y;
          console.log(needleValue, angle);

          //needle
          ctx.translate(cx, cy);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(0, -2);
          ctx.lineTo(height - cy - 20, 0);
          ctx.lineTo(0, 2);
          ctx.fillStyle = '#323232';
          ctx.fill();
          ctx.restore();

          //needle dot
          ctx.beginPath();
          ctx.arc(cx, cy, 7, 1, 10);
          ctx.fill();
          ctx.restore();
      }
  }

  Chart.register(ArcElement, Title, ChartToolTip, guageNeedle);

  return (
    <Box sx={{ display: "flex" }}>
     <AppBar open={open} setOpen={setOpen} title={'Dashboard'}/>
     <Sidebar open={open} setOpen={setOpen}/>
      <Main open={open} sx={{ mt: 5, paddingLeft: 5 }}>
        <DrawerHeader />
        <Grid container sx={{ flexGrow: 0 }}spacing={2}>
            <Grid item container xs={12} justifyContent="center" spacing={2}>
              <Grid item>
                <Paper
                  sx={styles.contentPaper}
                  elevation={12}
                >
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    What is your Risk of Audit?
                    <Tooltip
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: theme.palette.common.white,
                            border: "0px",
                            boxShadow: theme.shadows[10],
                            borderRadius: 3,
                          },
                        },
                        arrow: {
                          sx: {
                            color: theme.palette.common.white,
                          },
                        },
                      }}
                      placement="top"
                      arrow
                      title={
                        <span
                          style={{
                            color: theme.palette.common.black,
                            fontSize: "13.5px",
                          }}
                        >
                          Analysis of data from Providers with{" "}
                          <span style={{ fontWeight: "bold" }}>highest</span>{" "}
                          RAF score to identify potential risk of RADV audit
                        </span>
                      }
                    >
                      <IconButton>
                        <Info />
                      </IconButton>
                    </Tooltip>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Link href="/auditRisk" sx={{float: 'right'}}>More Details</Link>
                  </Grid>
                  <Grid item xs={12} sx={styles.donutGrid}>
                    <div style={{height: '250px', width:'250px'}}>
                    <Doughnut
                        width={1}
                        height={1}
                        data={{
                            labels: [
                            'Minimum',
                            'Low',
                            'Moderate',
                            'High',
                            'Maximum',
                            ],
                            datasets: [{
                            label: 'My First Dataset',
                            data: [20, 20, 20, 20, 20, 20],
                            backgroundColor: [
                                '#34D399',
                                '#A7F3D0',
                                '#FFBB33',
                                '#FF9988',
                                '#EA6953',
                                'white'
                            ],
                            hoverOffset: 4,
                            needleValue: 140
                            }]
                        }}
                        options={{
                            animation:{
                                animateRotate: true,
                                animateScale: true
                            },
                            cutout: '82%',
                            rotation: 210,
                            plugins: { 
                                tooltip:{
                                    callbacks: {
                                        label: function(tooltipItem, data, value) {
                                            return `${tooltipItem.label}`;
                                        }
                                    }
                                }
                            }
                        }}
                        plugins={[guageNeedle]}
                    />
                  </div>
                  </Grid>
                  <Grid item xs={12} sx={{display: 'flex', flexDirection:'column'}}>
                    <Typography sx={{padding: 1}}><FiberManualRecordRoundedIcon sx={styles.scoreText}/>Current RAF Score<span style={{marginLeft: '80px', fontWeight:600}}>2.10</span></Typography>
                    <Typography sx={{padding: 1}}><FiberManualRecordRoundedIcon sx={styles.scoreText}/>Suspected RAF Score<span style={{marginLeft: '55px', fontWeight:600}}>1.40</span></Typography>
                    <Typography sx={{padding: 1}}><FiberManualRecordRoundedIcon sx={styles.scoreText}/>RAF Score Difference<span style={{marginLeft: '60px', fontWeight:600, color:'#EA6953'}}>{rafDiff}</span></Typography>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
              <Paper
                  sx={styles.contentPaper}
                  elevation={12}
                >
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Potential Revenue Loss
                    <Tooltip
                      componentsProps={{
                        tooltip: {
                          sx: {
                            backgroundColor: theme.palette.common.white,
                            border: "0px",
                            boxShadow: theme.shadows[10],
                            borderRadius: 3,
                          },
                        },
                        arrow: {
                          sx: {
                            color: theme.palette.common.white,
                          },
                        },
                      }}
                      placement="top"
                      arrow
                      title={
                        <span
                          style={{
                            color: theme.palette.common.black,
                            fontSize: "13.5px",
                          }}
                        >
                          Analysis of data from Providers with{" "}
                          <span style={{ fontWeight: "bold" }}>lowest</span>{" "}
                          RAF score to identify potential improvements
                        </span>
                      }
                    >
                      <IconButton>
                        <Info />
                      </IconButton>
                    </Tooltip>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Link href="/revenueLoss" sx={{float: 'right'}}>More Details</Link>
                  </Grid>
                  <Grid item xs={6} spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Paper sx={styles.revenuePaper}>$16M</Paper>
                    <span style={styles.revenueText}>Current RAF Revenue</span>
                    <Paper sx={styles.revenuePaper}>$26M</Paper>
                    <span style={styles.revenueText}>Suspected RAF Revenue</span>
                    <Paper sx={styles.revenuePaper}><span style={{color: '#EA6953'}}>$10M</span></Paper>
                    <span style={styles.revenueText}>Revenue Difference</span>
                  </Grid>
                  <Grid item xs={6} sx={styles.pieGrid}>
                    <div style={{height: '250px', width:'250px'}}>
                    <Pie
                        width={1}
                        height={1}
                        data={{
                            labels: [
                              '$26M',
                              '$16M',
                            ],
                            datasets: [{
                            label: 'My First Dataset',
                            data: [70, 30],
                            backgroundColor: [
                                '#2B2E7D',
                                '#EDEFFF',
                            ],
                            hoverOffset: 4
                            }]
                        }}
                        options={{
                            plugins: {
                                guageNeedle: false
                            }
                        }}
                    />
                  </div>
                  </Grid>
                  <Grid item xs={12} sx={{display: 'flex', flexDirection:'column'}}>
                    <Typography sx={{padding: 1}}><FiberManualRecordRoundedIcon sx={styles.scoreText}/>Current RAF Score<span style={{marginLeft: '80px', fontWeight:600}}>0.70</span></Typography>
                    <Typography sx={{padding: 1}}><FiberManualRecordRoundedIcon sx={styles.scoreText}/>Suspected RAF Score<span style={{marginLeft: '55px', fontWeight:600}}>1.40</span></Typography>
                    <Typography sx={{padding: 1}}><FiberManualRecordRoundedIcon sx={styles.scoreText}/>RAF Score Difference<span style={{marginLeft: '60px', fontWeight:600, color:'#EA6953'}}>{rafDiff}</span></Typography>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          {/* </Grid> */}
        </Grid>
        <DrawerHeader />
        <Grid container sx={{ flexGrow: 1 }}spacing={2}>
            <Grid item container xs={12} justifyContent="center" spacing={2}>
              {appData.footerData.map((data) => (
                <Grid item>
                    <Paper
                    sx={styles.footerCard}
                    elevation={12}
                    >
                        <Avatar variant='rounded' sx={data.styles}>
                            {data.icon}
                        </Avatar>
                        <Typography variant="caption" >{data.title}</Typography>
                        <Typography variant="h5">{data.data}</Typography>
                    </Paper>
                </Grid>))}
            </Grid>
        </Grid>
      </Main>
    </Box>
  );
}

export default PersistentDrawerLeft;