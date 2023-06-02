import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material
import { Box, Container, Stack, Typography, Card, Link } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorPreview } from '../components/color-utils';

// ----------------------------------------------------------------------
const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  position: 'absolute',
  backgroundColor: 'rgba(145, 158, 171, 0.12)',
  "&:hover": {
    objectFit: 'cover',
  },
});

// ----------------------------------------------------------------------


export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Themes
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        {/* <ProductList /> */}

        <Grid container spacing={3}>
          <Grid key={1} item xs={12} sm={6} md={4}>
            <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <ProductImgStyle src="/static/mock-images/products/product_1.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 1
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#38b2ac" />
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: 'text.disabled',
                        textDecoration: 'line-through',
                      }}
                    >
                    </Typography>
                    &nbsp;
                    {"1"}
                  </Typography>
                </Stack>
              </Stack>
              
            </Card>
            
          </Grid>
          <Grid key={1} item xs={12} sm={6} md={4}>
            <Card>
              <Box sx={{ pt: '100%', position: 'relative' }}>
                <ProductImgStyle src="/static/mock-images/products/product_2.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 2
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#3d5a80" />
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: 'text.disabled',
                        textDecoration: 'line-through',
                      }}
                    >
                    </Typography>
                    &nbsp;
                    {"2"}
                  </Typography>
                </Stack>
              </Stack>
              
            </Card>
            
          </Grid>
          <Grid key={1} item xs={12} sm={6} md={4}>
            <Card>
              <Box sx={{ pt: '100%', position: 'relative' }}>
                <ProductImgStyle src="/static/mock-images/products/product_3.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 3
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#01be96" />
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: 'text.',
                        textDecoration: 'line-through',
                      }}disabled
                    >
                    </Typography>
                    &nbsp;
                    {"3"}
                  </Typography>
                </Stack>
              </Stack>
              
            </Card>
            
          </Grid>
          <Grid key={1} item xs={12} sm={6} md={4}>
            <Card>
              <Box sx={{ pt: '100%', position: 'relative' }}>
                <ProductImgStyle src="/static/mock-images/products/product_4.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 4
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#fd6e0a" />
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: 'text.disabled',
                        textDecoration: 'line-through',
                      }}
                    >
                    </Typography>
                    &nbsp;
                    {"4"}
                  </Typography>
                </Stack>
              </Stack>
              
            </Card>
            
          </Grid>
          <Grid key={1} item xs={12} sm={6} md={4}>
            <Card>
              <Box sx={{ pt: '100%', position: 'relative' }}>
                <ProductImgStyle src="/static/mock-images/products/product_5.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="#" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 5
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#7500fa" />
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: 'text.disabled',
                        textDecoration: 'line-through',
                      }}
                    >
                    </Typography>
                    &nbsp;
                    {"5"}
                  </Typography>
                </Stack>
              </Stack>
              
            </Card>
            
          </Grid>
        </Grid>

        <ProductCartWidget />
      </Container>
    </Page>
  );
}