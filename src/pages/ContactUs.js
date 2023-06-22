import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormProvider, RHFTextField } from '../components/hook-form';
import { Stack, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';

export default function ContactUs() {
  const form = useRef();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false)

  const RegisterSchema = Yup.object().shape({
    user_name: Yup.string().required('Name is required'),
    user_email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const defaultValues = {
    user_name: '',
    user_email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
       emailjs.send('service_w02uvv4', 'template_ar2j91p', data, 'tKdp5Qi0ByXB7A6jS')
      .then((resp) => {
        setLoading(false);
        setSuccessful(true);
        setResponse("Your request has successfully submitted and team will contact you soon !");
      },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setResponse("Request Submission Failed !");
        }
      );
  };

  return (
    <div className='p-3'>
    <div className='text-center'>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Contact Us
        </Typography>
      </div>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="user_name" label="Name" />
          <RHFTextField name="user_email" label="Email" />
        </Stack>

        <RHFTextField name="message" label="Message" />
        <div className='text-center'>
        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Submit
        </LoadingButton>
        </div>
      </Stack>

      <br></br> <br></br>
      {response && (
        <div>
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert">
            {response}
          </div>
        </div>
      )}
    </FormProvider>
    </div>
  );
};