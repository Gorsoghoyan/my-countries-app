import s from "./styles.module.scss";

function ImageDiv({
  variant,
  width,
  height,
  image,
  size = "cover",
  position = "center",
  repeat = "no-repeat",
  borderRadius = "50%",
  margin
}) {
  return (
    <div className={s[variant]} style={{
      width,
      height,
      margin,
      borderRadius,
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat
    }}></div>
  );
}

export default ImageDiv;