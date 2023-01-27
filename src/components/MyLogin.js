import React from 'react';
import { useLogin, Login } from 'react-admin';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Form from './Form'
import { useLoginSuccess } from '../contexts';

const useStyles = makeStyles(theme => ({

  root: {
    
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(8),
    //   minHeight: '40vh',
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundBlendMode: 'multiply'

  }

}))


const CustomLogin = () => {

  const classes = useStyles()
  const login = useLogin();
  const onSuccess = useLoginSuccess()


  return (
     <Login>

      <Box className={classes.root}>
     
      <Form 
        title="ra.auth.sign_in" 
        onSubmit={(data) => login(data).then((data)=>{
            onSuccess(data)
        })} 
        fields={[
            {name: "email"},
            {name: "password", type: "password"}
        ]} 
        />
     
      </Box>
     </Login>
  );
};


export default CustomLogin;






/*


import {
    Form,
    required,
    useTranslate,
    useLogin,
    useNotify,
    useSafeSetState,
} from 'ra-core';
import { TextInput } from '../input';

export const LoginForm = (props: LoginFormProps) => {
    const { redirectTo, className } = props;

    const login = useLogin();
    const translate = useTranslate();
    const notify = useNotify();

    const submit = (values: FormData) => {
        setLoading(true);
        login(values, redirectTo)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                notify(
                    typeof error === 'string'
                        ? error
                        : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                    {
                        type: 'warning',
                        messageArgs: {
                            _:
                                typeof error === 'string'
                                    ? error
                                    : error && error.message
                                    ? error.message
                                    : undefined,
                        },
                    }
                );
            });
    };

    return (
        <StyledForm
            onSubmit={submit}
            mode="onChange"
            noValidate
            className={className}
        >
            <CardContent className={LoginFormClasses.content}>
                <TextInput
                    autoFocus
                    source="username"
                    label={translate('ra.auth.username')}
                    validate={required()}
                    fullWidth
                />
                <TextInput
                    source="password"
                    label={translate('ra.auth.password')}
                    type="password"
                    autoComplete="current-password"
                    validate={required()}
                    fullWidth
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    disabled={loading}
                    fullWidth
                    className={LoginFormClasses.button}
                >
                   
                </Button>
            </CardContent>
        </StyledForm>
    );
};


*/