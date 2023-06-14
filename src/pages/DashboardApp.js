import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import AuthService from "../services/auth.service";

// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  //Retrive Id
  const user = AuthService.getCurrentUser();
  let loginId = ""
  let username =""  
  if(user){
    loginId = user.id
    username= user.username
  }
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back {username}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Current Plan" total={"20$"} icon={'teenyicons:layers-intersect-solid'} ></AppWidgetSummary>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Plan Expriy Date" total={"05-Jun-2024"} color="info" icon={'solar:calendar-linear'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Remainig Days" total={9553} color="success" icon={'teenyicons:bag-alt-solid'} />
          </Grid>






          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppOrderTimeline
              title="Digital Card"
              list={[...Array(2)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '29-May-2023',
                  'Last Update on 25-May-2023',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppCurrentSubject
              title="Current Language"
              chartLabels={['JavaScript', 'TypeScript', 'React JS', 'Spring Boot', 'Bootstrap', 'MySql']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
