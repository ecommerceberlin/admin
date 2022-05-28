import { Typography } from "@mui/material";
import { useTranslate } from "react-admin";


const MyTypography = ({label, children="", ...rest}) => {

    const translate = useTranslate()

    return <Typography {...rest}>{label? translate(label): children}</Typography>

}


export default MyTypography