
function Paper(props) {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
}

export default Paper;