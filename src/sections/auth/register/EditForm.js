import * as Yup from 'yup';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import service from "../../../services/service";

// ----------------------------------------------------------------------

export default function EditForm() {
  const navigate = useNavigate();
  const form = useRef(null)

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false)

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    //email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phone: Yup.string().required('Phone no required'),
    //address: Yup.string().required('Address required'),
    title: Yup.string().required('Title'),
    org: Yup.string().required('Organization required'),
    whatsappNo: Yup.string().required('Whatsapp Number required'),
    //info: Yup.string().required('About us required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    title: '',
    org: '',
    info: '',
    whatsappNo: '',
    url: '',
    attachment: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = (data) => {
    console.log(data)
    setMessage("");
    setLoading(true);
    const formData = new FormData();
    formData.append('files', selectedFile);
    for (let key in data) {
      formData.append(key, data[key])
    } service.create(formData)
      .then(response => {
        console.log(response.data);
        setMessage("Data Submitted successfully !");
        setSuccessful(true);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setMessage("Issue in Data Submission ! ");
        setLoading(false);
      });
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} ref={form}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="firstName" label="First name" />
            <RHFTextField name="lastName" label="Last name" />
          </Stack>
          <label htmlFor="img">Profile Image</label>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <input
              type="file"
              className="form-control"
              id="attachment"
              required
              name="attachment"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="title" label="Title" />
            <RHFTextField name="org" label="Organization" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <RHFTextField name="info" label="About us" maxlength="255"/>
          </Stack>

          <Typography variant="h4" gutterBottom>
            Contact Details
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Iconify icon="bi:phone-fill" color="#DF3E30" width={40} height={50} />
            <RHFTextField name="phone" label="Mobile" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Iconify icon="mingcute:whatsapp-line" color="#DF3E30" width={40} height={50} />
            <RHFTextField name="whatsappNo" label="Whatsapp" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Iconify icon="fontisto:email" color="#DF3E30" width={40} height={50} />
            <RHFTextField name="email" label="Email address" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Iconify icon="uil:link" color="#DF3E30" width={40} height={50} />
            <RHFTextField name="url" label="Website" />
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Iconify icon="mdi:location" color="#DF3E30" width={40} height={50} />
            <RHFTextField name="address" label="Address" />
          </Stack>




          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </FormProvider>
      <br></br><br></br>
      {message && (
        <div>
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert">
            {message}
          </div>
        </div>
      )}
    </>
  );
}
