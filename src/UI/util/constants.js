import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import PersonRemoveRoundedIcon from '@mui/icons-material/PersonRemoveRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';

export const appData = {
  drawerWidth: 240,
  footerData: [
    {
      title: "Current Enrollment",
      icon: null,
      data: "270,070",
      styles: { bgcolor: "#EDEFFF", color: "#2E3CDE", borderRadius: 4 },
    },
    {
      title: "No. of Clinics",
      icon: <CorporateFareRoundedIcon />,
      data: "150",
      styles: {
        bgcolor: "rgba(255, 187, 51, .13)",
        color: "#FFBB33",
        borderRadius: 4,
      },
    },
    {
      title: "No. of Providers",
      icon: <LocalHospitalRoundedIcon />,
      data: "1,350",
      styles: {
        bgcolor: "rgba(234, 105, 83, 0.13)",
        color: "#EA6953",
        borderRadius: 4,
      },
    },
    {
      title: "Average panel size",
      icon: <PeopleRoundedIcon />,
      data: "200",
      styles: {
        bgcolor: "rgba(52, 211, 153, 0.13)",
        color: "#34D399",
        borderRadius: 4,
      },
    },
    {
      title: "Average RAF",
      icon: <ArticleRoundedIcon />,
      data: "1.00",
      styles: {
        bgcolor: "rgba(148, 163, 184, 0.13)",
        color: "#94A3B8",
        borderRadius: 4,
      },
    },
  ],
  revenueLossCards: [
    {
      title: "Current RAF Score",
      icon: <AssignmentRoundedIcon />,
      data: "0.70",
      styles: { bgcolor: "#EDEFFF", color: "#2E3CDE", borderRadius: 4 },
    },
    {
      title: "RAF Revenue Difference",
      icon: <PersonRemoveRoundedIcon />,
      data: "$10M",
      styles: {
        bgcolor: "rgba(148, 163, 184, 0.13)",
        color: "#94A3B8",
        borderRadius: 4,
      },
      textColor: { color: "#EA6953" },
    },
  ],
  auditRiskCards: [
    {
      title: "Current RAF Score",
      icon: <AssignmentRoundedIcon />,
      data: "2.10",
      styles: { bgcolor: "#EDEFFF", color: "#2E3CDE", borderRadius: 4 },
    },
    {
      title: "Audit Risk Status",
      icon: <SpeedRoundedIcon />,
      data: "Maximum",
      styles: {
        bgcolor: "rgba(148, 163, 184, 0.13)",
        color: "#94A3B8",
        borderRadius: 4,
      },
      textColor: { color: "#EA6953" },
    },
  ],
  revChartLabels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  revChartData: [
    -0.98, -0.77, -1.56, -1, -1.14, -1.41, -1.37, -0.83, -1.08, -2.32, -1.44,
    -1.65, -2.02, -1.17,
  ],
  revPointColors: [
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
  ],
  audChartLabels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  audChartData: [
    0.94, 1.27, 0.75, 0.55, 1, 0.8, 1.21, 0.67, 1.6, 2.11, 1.3, 1, 1.69, -1.17, 1.39, 2.02, 1.18],
  audPointColors: [
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#FFBB33",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
    "#131FB5",
  ],
};