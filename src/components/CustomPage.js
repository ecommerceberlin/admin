

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';


const CustomPage = ({title="title", children}) => (
    <Card>
        <Title title={title} />
        <CardContent>{children}</CardContent>
    </Card>
);

export default CustomPage;