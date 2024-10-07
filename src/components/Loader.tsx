import {Box, styled} from "@mui/material";
import { purple } from '@mui/material/colors';

export const Loader = styled(Box)({
    height: "2px",
    background: purple.A700,
    position: "absolute",
    top: "0px",
    left: "14px",
    borderRadius: "0 0 100% 100%",
    width: "20%",
    zIndex: 2,
    boxShadow: "0 30px 75px 16px " +  purple.A700,
    animation: "load .7s infinite",
    "@keyframes load":{
        "0%":{
            left: "14px"
        },
        "50%":{
            left: "calc(80% - 14px)"
        },
        "100%":{
            left: "14px"
        }
    }
});
