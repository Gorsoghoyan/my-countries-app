
function TableBodyCell(props) {
  return (
    <td {...props} style={{ minWidth: props.minWidth }}>
      {props.children}
    </td>
  );
}

export default TableBodyCell;