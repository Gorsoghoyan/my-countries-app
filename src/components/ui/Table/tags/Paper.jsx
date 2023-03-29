
function Paper(props) {
  return (
    <section {...props}>
      {props.children}
    </section>
  );
}

export default Paper;