import * as Yup from 'yup';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
import AuthService from "../../../services/auth.service";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const form = useRef(null)

  const id = useLocation();
  let formId = "";
  const [isUpdate, setIsUpdate] = useState(false)

  if (id.state != null && id.state.id != null) {
    formId = id.state.id
  }

  const user = AuthService.getCurrentUser();
  let loginId = 0
  if (user) {
    loginId = user.id;
  }
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false)

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phone: Yup.string().required('Phone no required'),
    address: Yup.string().required('Address required'),
    title: Yup.string().required('Title'),
    org: Yup.string().required('Organization required'),
    whatsappNo: Yup.string().required('Whatsapp Number required'),
    info: Yup.string().required('About us required'),
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
    loginId: loginId,
  };
  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;


  useEffect(() => {
    if (formId) {
      setIsUpdate(true)
      service.get(formId)
        .then(resp => {
          reset(formValues => ({
            ...formValues,
            firstName: resp.data.firstName,
            lastName: resp.data.lastName,
            email: resp.data.email,
            phone: resp.data.phone,
            address: resp.data.address,
            title: resp.data.title,
            org: resp.data.org,
            info: resp.data.info,
            whatsappNo: resp.data.whatsappNo,
            url: resp.data.url,
            loginId: resp.data.loginId,
          }))
        })
    }
  }, []);
  const onSubmit = (data) => {
    console.log(data)
    setMessage("");
    setLoading(true);
    const formData = new FormData();
    formData.append('files', selectedFile);
    for (let key in data) {
      formData.append(key, data[key])
    }
    if (isUpdate) {
      service.update(formId, formData)
        .then(response => {
          console.log(response.data);
          setMessage("Data Updated successfully !");
          setSuccessful(true);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setMessage("Issue in Data Updation ! ");
          setLoading(false);
        });
    }
    else {
      service.create(formData)
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
    }
  };

  const deleteEntry = (data) => {
    console.log(data)
    const confirmBox = window.confirm("Are you sure you want to delete details ?")
    if (confirmBox === true) {
    setMessage("");
    setLoading(true);
    service.delete(formId)
        .then(response => {
          console.log(response.data);
          setMessage("Data Deleted successfully !");
          setSuccessful(true);
          setLoading(false);
          navigate('/dashboard', { replace: true });
        })
        .catch(e => {
          console.log(e);
          setMessage("Issue in Data Delete ! ");
          setLoading(false);
        });
      }
  };

  return (
    <>
     <Typography variant="h4" sx={{ mb: 5 }}>
     {isUpdate ? "Edit Details" : "Register Details"}
      </Typography>
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
            <RHFTextField name="info" label="About us"/>
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
          {isUpdate ? <>

            <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
              Update         
            </LoadingButton>
            <LoadingButton fullWidth size="medium" onClick={deleteEntry} variant="contained" loading={isSubmitting}>
              Delete
            </LoadingButton>
          </> :
            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
              Register          </LoadingButton>



          }

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
