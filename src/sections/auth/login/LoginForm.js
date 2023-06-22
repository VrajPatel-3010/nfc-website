import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import AuthService from "../../../services/auth.service";
import Router from '../../../../src/routes';
// ----------------------------------------------------------------------
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../../layouts/dashboard';
import DashboardApp from '../../../pages/DashboardApp';
import User from '../../../pages/User';
import Register from '../../../pages/Register';
import Products from '../../../pages/Products';
import Login from '../../../pages/Login';
import $ from 'jquery';
import Portfolio from '../../../pages/Portfolio';
import ContactUs from '../../../pages/ContactUs';

export default function LoginForm() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [authorized, setAutorized] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setAutorized(true);
    }
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data.email)
    AuthService.login(data.email, data.password).then(
      (response) => {
        console.log(response)
        $("#homePage,#footer").hide();
        navigate('/dashboard/app');
        $(window).scrollTop(0);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email Address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
      <br></br> <br></br>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}

      <Routes>
        <Route path="/Login/*" element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />}></Route>
        <Route path='/app' element={<DashboardApp />} />
        <Route path='/user' element={<User />} /> {/*A nested route!*/}
        <Route path='/register' element={<Register />} /> {/*A nested route!*/}
        <Route path='/products' element={< Products />} /> {/*A nested route!*/}
        <Route path='/portfolio' element={< Portfolio/>} /> {/*A nested route!*/}
        <Route path='/contactUs' element={<ContactUs />} /> {/*A nested route!*/}
      </Routes>

    </FormProvider>


  );
}
