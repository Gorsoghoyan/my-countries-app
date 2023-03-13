import { Link } from "react-router-dom";

function DropDownItem({ title, link, onClick }) {
  return (
    <Link onClick={onClick} to={link}>
      {title}
    </Link>
  );
}

export default DropDownItem;