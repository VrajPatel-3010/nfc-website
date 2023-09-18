import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useRef, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthService from "../services/auth.service";

// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// material
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock

// ----------------------------------------------------------------------
import service from "../services/service";


// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const navigate = useNavigate();
  const user = AuthService.getCurrentUser();
  let loginId = 0
  let admin = false
  let teamLead = false
  let teamMember = false

  if (user) {
    loginId = user.id;
    if (user.roles[0] == "ROLE_ADMIN") {
      admin = true
    }
    if (user.roles[0] == "ROLE_TEAM_LEAD") {
      teamLead = true
    }
    if (user.roles[0] == "ROLE_MODERATOR") {
      teamMember = true
    }
    
  }


  const TABLE_HEAD = []
  TABLE_HEAD.push({ id: 'title', label: 'Title', alignRight: false },
    { id: 'firstname', label: 'Name', alignRight: false },
    { id: 'org', label: 'Company', alignRight: false },
    { id: 'email', label: 'E-mail', alignRight: false },
  );

  if (admin) {
    TABLE_HEAD.push({ id: 'price', label: 'Price', alignRight: false },)
    TABLE_HEAD.push({ id: 'activeStatus', label: 'Status', alignRight: false },)
  }
  if(!teamMember){
  TABLE_HEAD.push({ id: '' },)
  }

  // if (state.state != null && state.state.response != null && state.state.response.id != null) {
  //   loginId = state.state.response.id;
  //   console.log("Login Id",loginId)
  // }
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const [USERLIST, setUSERLIST] = useState([]);
  useEffect(() => {
    if (admin) {
      service.getAll()
        .then(resp => {
          if (resp.data.length > 0) {
            setUSERLIST(resp.data)
          }
        })
    }
    else if(teamLead){
      service.getAllTeamMember(loginId)
      .then(resp => {
        if (resp.data.length > 0) {
          setUSERLIST(resp.data)
        }
      })
    }
    else {
      service.getIdList(loginId)
        .then(resp => {
          if (resp.data.length > 0) {
            setUSERLIST(resp.data)
          }
        })
    }
  }, []);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;


  const deleteData = (e, id) => {
    e.preventDefault()
    navigate('/dashboard/register', {
      state: {
        id
      }
    });
  }
  const editData = (e, id) => {
    e.preventDefault()
    navigate('/dashboard/register', {
      state: {
        id
      }
    });
  }

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    let { id, title, data, type, firstName, org, email, price, activeStatus } = row
                    { admin ? { id, title, data, type, firstName, org, email, price, activeStatus } = row : { id, title, data, type, firstName, org, email } = row }

                    const isItemSelected = selected.indexOf(firstName) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role=""
                      >

                        <TableCell component="th" scope="row">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={firstName} src={"data:" + type + ";base64," + data} />
                            <Typography variant="subtitle2" noWrap>
                              {title}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{firstName}</TableCell>
                        <TableCell align="left">{org}</TableCell>
                        <TableCell align="left">{email}</TableCell>
                        {admin && <TableCell align="left">$ {price}</TableCell>}
                        {admin && <TableCell >{activeStatus == 1 ? <Label variant="ghost" color='success'>Active</Label> : <Label variant="ghost" color='error'>Inactive</Label>}</TableCell>}
                        {!teamMember &&
                        <TableCell align="right">
                          {/* <UserMoreMenu /> */}
                          <TableCell align="right">
                            <IconButton onClick={(event) => editData(event, id)}>
                              <Iconify icon="eva:edit-fill" width={24} height={24} color="green" />
                            </IconButton>
                            <IconButton onClick={(event) => deleteData(event, id)}>
                              <Iconify icon="eva:trash-2-outline" width={24} height={24} color="red" />
                            </IconButton>
                          </TableCell>
                        </TableCell>
                        }
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
