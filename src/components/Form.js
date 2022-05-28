
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from './Button'
import { useForm } from "react-hook-form";
import { useTranslate, useSafeSetState, useNotify } from 'react-admin';
import { CardContent, CircularProgress } from '@mui/material';
import MyTypography from './MyTypography';

const Form = ({onSubmit, fields=[], title=""}) => {

    const translate = useTranslate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useSafeSetState(false);
    const notify = useNotify();

    return (
        <form 
            onSubmit={handleSubmit(function(data){
                setLoading(true);
                onSubmit(data)
                setLoading(false);
            })}
        >

        <CardContent>

        {loading ? (
        <CircularProgress
        size={19}
        thickness={3}
        />
        ) : (<MyTypography label={title} />)}

        {fields.map(({name, ...rest}, i) => <Box key={name}><TextField autoFocus={i===0? true: undefined} {...register(name)} label={translate(name)} {...rest} fullWidth /></Box> )}

        <Box sx={{mt: 1}}>
        <Button label="submit" type="submit" /></Box>
        </CardContent>
        </form>
    )
}

export default Form