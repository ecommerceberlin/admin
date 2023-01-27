
import { Card, CardContent } from '@mui/material';

const Aside = ({children}) => {

    return (
        <Card sx={{ order: 1, ml: 2, mt: 8, width: 200 }}>
        <CardContent>
        {children}
        </CardContent>
        </Card>
    )
}

export default Aside