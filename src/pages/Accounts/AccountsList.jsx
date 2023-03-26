import { 
  Autocomplete, Pagination, Paper, Stack, Table, TableBody, 
  TableBodyCell, TableContainer, TableHead, TableHeadCell, TableRow 
} from "../../components/ui/Table";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { columns } from "../../configs/accounts";
import Button from "../../components/ui/Button/Button";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import ComponentLoading from "../../components/ui/ComponentLoading/ComponentLoading";
import defaultAvatar from "../../assets/images/profile.png";
import useAccountsList from "./useAccountsList";
import v from "../../assets/sass/_variables.scss";
import s from "./styles.module.scss";

function AccountsList() {
  const {
    error,
    loading,
    page,
    rows,
    rowsPerPage,
    searchedUser,
    allUsersSize,
    filterData,
    handleChangePage,
    handleSearchedUser,
    handleChangeRowsPerPage
  } = useAccountsList();

  return (
    <Paper className={s.paper}>
      <Stack className={s.searchAndAdd}>
        <Autocomplete
          options={rows}
          searchedUser={searchedUser}
          placeholder={"Search user"}
          onChange={(e, v) => filterData(v)}
          handleSearchedUser={handleSearchedUser}
          getOptionLabel={(row) => row.displayName || ""}
        />
        <Button
          variant="add-user"
          onClick={() => ""}
        >
          <AiOutlinePlus />Add
        </Button>
      </Stack>
      {loading ? (
        <Stack className={s.flex}>
          <ComponentLoading />
        </Stack>
      ) : error ? (
        <Stack className={s.flex}>
          <ErrorMessage
            error={error}
            color={v.errorColor}
            fontSize={25}
          />
        </Stack>
      ) : !rows.length ? (
        <Stack className={s.flex}>
          <ErrorMessage
            error={"There are currently no users"}
            color={v.errorColor}
            fontSize={25}
          />
        </Stack>
      ) : (
        <TableContainer className={s.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableHeadCell key={column.id}>
                    {column.title}
                  </TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableBodyCell data-label={columns[0].title}>
                    {index + 1}
                  </TableBodyCell>
                  <TableBodyCell
                    data-label={columns[1].title}
                    className={s.userBlock}
                  >
                    <ImageDiv 
                      width={35}
                      height={35}
                      margin="0 20px 0 0"
                      image={row.photoURL || defaultAvatar} 
                    />
                    {row.displayName}
                  </TableBodyCell>
                  <TableBodyCell data-label={columns[2].title}>
                    {row.email}
                  </TableBodyCell>
                  <TableBodyCell data-label={columns[3].title}>
                    <Stack className={s.actions}>
                      <MdModeEditOutline onClick={() => ""} />
                      <MdDelete onClick={() => ""} />
                    </Stack>
                  </TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
      }
      <Pagination
        className={s.tablePagination}
        page={page}
        count={allUsersSize}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default AccountsList;