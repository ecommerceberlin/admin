
import { Grid, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Table } from "../../../components"
import { orange } from "@material-ui/core/colors"

const useStyles = makeStyles({
    root: {
        backgroundColor: orange[100]
    }
})


const transformValueIfNeeded = (val) => {

    if(val.includes("http")){
        return (new URL(val)).pathname
    }

    if(val.length > 50){
        return val.substring(0, 50)
    }

    return val
}

const ParticipantDetails = ({id, record, resource }) => {

    const classes = useStyles()

    if(!record){
        return null
    }

    return (<Box className={classes.root}>
            <Grid container spacing={2}>
            <Grid item>

            <Table columns={[
                {name: "key", render: (item)=> item.key},
                {name: "value", render: (item)=> item.value}
            ]} rows={[
                {key: "id", value: record.id},
                {key: "code", value: record.code},
                {key: "token", value: "xxxx"}
            ]} />

            </Grid>
            <Grid item>
            <Table columns={[
                {name: "key", render: (item)=> item.key},
                {name: "value", render: (item)=> item.value}
            ]} rows={
            Object.keys(record.profile || {}).map(key => ({ key, value: transformValueIfNeeded(record.profile[key]) })).filter(item=>item.value)
            } />
            </Grid>
            </Grid>
    </Box>)
}

export default ParticipantDetails