
function TableHeadCell(props) {
  return (
    <th {...props} style={{ minWidth: props.minWidth }}>
      {props.children}
    </th>
  );
}

export default TableHeadCell;