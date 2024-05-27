import { FormControl, FormHelperText, Input } from '@mui/material';
import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    return (
    <Grid item xs={12}>
        <FormControl fullWidth>
            <Input id="login_nome" aria-describedby="login_nome_helper_text" value={Login} 
            onChange={e => { setLogin(e.target.value) }} />
            <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
        </FormControl>
        </Grid>
    );

}

export default Login;