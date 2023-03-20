import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SelectBox from "../../SelectBox/SelectBox";  
import Button from "../../Button/Button";
import s from "./pagination.module.scss";
import c from "classnames";

function Pagination({
  className,
  page,
  count,
  rowsPerPage,
  onPageChange,
  rowsPerPageOptions,
  onRowsPerPageChange
}) {
  return (
    <div className={c(s.container, className)}>
      <div className={s.select}>
        <span>Rows per page:</span>
        <SelectBox 
          options={rowsPerPageOptions}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </div>
      <p className={s.info}>
        {page * rowsPerPage - rowsPerPage + 1}
        <span>-</span>
        {page * rowsPerPage > count ? count : page * rowsPerPage}
        <span>of</span>
        {count}
      </p>
      <div className={s.arrows}>
        <Button
          variant="p"
          disabled={page === 1 || count < rowsPerPage}
          onClick={(e) => onPageChange("prev")}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          variant="p"
          disabled={page * rowsPerPage >= count || count < rowsPerPage}
          onClick={(e) => onPageChange("next")}
        >
          <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;