import { useState,useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import service from "../services/service";

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
import $ from 'jquery';
import Label from 'src/components/Label';
import AuthService from "../services/auth.service";

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
  $("#homePage,#footer").hide();
  $(window).scrollTop(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [themeId, setThemeId] = useState();

  const user = AuthService.getCurrentUser();
  let loginId = 0
  console.log(user)
  if (user) {
    loginId = user.id;
  }

  useEffect(() => {
    service.getIdList(loginId)
      .then(resp => {
        if (resp.data.length > 0) {
          setThemeId(resp.data[0].themeId)
        }
      })
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Dashboard: Theme">
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
                {themeId == 1 && <Label
                  variant="filled"
                  sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    backgroundColor: '#1890FF',
                    color: "white"
                  }}
                >
                  selected <h5>  &nbsp;&#x2713;</h5>
                </Label>}
                <ProductImgStyle src="/static/mock-images/products/product_1.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 1
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#db4952" />
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
                {themeId == 2 && <Label
                  variant="filled"
                  sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    backgroundColor: '#1890FF',
                    color: "white"
                  }}
                >
                  selected <h5>  &nbsp;&#x2713;</h5>
                </Label>}
                <ProductImgStyle src="/static/mock-images/products/product_2.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio2" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 2
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="black" />
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
                {themeId == 3 && <Label
                  variant="filled"
                  sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    backgroundColor: '#1890FF',
                    color: "white"
                  }}
                >
                  selected <h5>  &nbsp;&#x2713;</h5>
                </Label>}
                <ProductImgStyle src="/static/mock-images/products/product_3.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio3" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 3
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#fd6e0a" />
                  <Typography variant="subtitle1">
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        color: 'text.',
                        textDecoration: 'line-through',
                      }} disabled
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
                {themeId == 4 && <Label
                  variant="filled"
                  sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    backgroundColor: '#1890FF',
                    color: "white"
                  }}
                >
                  selected <h5>  &nbsp;&#x2713;</h5>
                </Label>}
                <ProductImgStyle src="/static/mock-images/products/product_4.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio4" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 4
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#40cad2" />
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
                {themeId == 5 && <Label
                  variant="filled"
                  sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    backgroundColor: '#1890FF',
                    color: "white"
                  }}
                >
                  selected <h5>  &nbsp;&#x2713;</h5>
                </Label>}
                <ProductImgStyle src="/static/mock-images/products/product_5.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio5" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 5
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#e4e3e3" />
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
                {themeId == 5 && <Label
                  variant="filled"
                  sx={{
                    zIndex: 9,
                    top: 16,
                    right: 16,
                    position: 'absolute',
                    textTransform: 'uppercase',
                    backgroundColor: '#1890FF',
                    color: "white"
                  }}
                >
                  selected <h5>  &nbsp;&#x2713;</h5>
                </Label>}
                <ProductImgStyle src="/static/mock-images/products/product_6.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio6" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 6
                  </Typography>
                </Link>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <ColorPreview colors="#820000" />
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
                <ProductImgStyle src="/static/mock-images/products/product_7.png" />
              </Box>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to="../portfolio7" color="inherit" underline="hover" component={RouterLink}>
                  <Typography variant="subtitle2" noWrap>
                    Theme 7
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
                    {"7"}
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