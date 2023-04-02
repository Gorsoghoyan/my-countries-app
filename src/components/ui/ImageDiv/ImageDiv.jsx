import s from "./styles.module.scss";

function ImageDiv({
  children,
  variant,
  width,
  height,
  image,
  defaultImage,
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
      backgroundImage: `url(${image}), url(${defaultImage})`,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat
    }}>
      {children && children}
    </div>
  );
}

export default ImageDiv;