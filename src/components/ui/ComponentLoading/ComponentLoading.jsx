import Spinner from "../Spinner/Spinner";

function ComponentLoading({ size, t, className }) {
  return (
    <Spinner
      className={className}
      size={size || "50px"}
      color={"#00acac"}
      t={t || "3px"}
    />
  );
}

export default ComponentLoading;
