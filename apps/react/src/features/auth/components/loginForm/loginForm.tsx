import { FC, memo } from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';

import { useAppDispatch } from '@js-camp/react/store';
import { loginUser } from '@js-camp/react/store/login/dispatchers';

import { initValues, LoginFormValue, loginFormSchema } from './loginSettings';

const LoginFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  /**
   * Handle login form submit.
   * @param values Values of login form fields.
   */
  const handleLogin = (values: LoginFormValue): void => {
    dispatch(loginUser(values));
  };

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: loginFormSchema,
    onSubmit: handleLogin,
  });

  return (
    <div>
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '30%',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoFocus
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            autoFocus
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 3, mb: 2, width: '40%' }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </div>
  );
};

export const LoginForm = memo(LoginFormComponent);
