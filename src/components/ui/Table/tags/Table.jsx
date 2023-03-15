
function Table(props) {
  return (
    <table {...props}>
      {props.children}
    </table>
  );
}

export default Table;