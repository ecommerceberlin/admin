import { Box } from "@material-ui/core"


const Aside = ({children}) => {

    return <Box ml={1} mt={1} sx={{minWidth: 200}}>{children}</Box>
}

export default Aside