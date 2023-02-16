
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"
import { Table, CopyToClipboardButton } from "../../../components"
import { grey } from "@mui/material/colors"
import {useRecordContext, useTranslate} from 'react-admin'
import {processURLs} from '../../../helpers'
import { isEmpty } from "lodash"
import {useCurrentHost} from '../../../datasources'


const useStyles = makeStyles(theme => ({
    root: {
         backgroundColor: theme.backgroundColor
    }
}))


const TicketButton = ({data}) => {

    const host = useCurrentHost()

    return <CopyToClipboardButton variant="text" text={`https://${host}/tickets/${data}`}/>
}

const AdminPanelButton = ({data}) => {

    const host = useCurrentHost()

    return <CopyToClipboardButton variant="text" text={`https://account.${host}/#/login?token=${data}`}/>
}


const Buttons = () => {

    const record = useRecordContext();
    const translate = useTranslate()

   return (
    <Table columns={[
        {name: "key", render: (item)=> item.key},
        {name: "value", render: (item)=> item.value}
    ]} rows={[
        {key: "ticket", value: <span><TicketButton data={record.code} /></span> },
        {key: "panel", value: <span><AdminPanelButton data={record.token} /></span>},
        {key: "id", value: record.id},
        {key: "company_id", value: record.company_id}
    ]} />
   )

}

const Profile = ({profile}) => {
    
    const translate = useTranslate()

    if(isEmpty(profile)){
        return null

    }
    return (<Table columns={[
        {name: "key", render: (item)=> item.key },
        {name: "value", render: (item)=> item.value}
    ]} rows={
        Object.keys(profile || {}).map(key => ({ 
            key: translate(`fields.${key}`), 
            value: processURLs(profile[key]) 
        })).filter(item=>item.value)
    } />)
}

const ParticipantDetails = () => {

    const record = useRecordContext();

    const classes = useStyles()


    if(!record){
        return null
    }

    return (<Box className={classes.root}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Buttons />
            </Grid>
            <Grid item xs={12} md={6}>
                <Profile profile={record.profile} />
            </Grid>
            </Grid>
    </Box>)
}

export default ParticipantDetails