
function ImageDiv({
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
    <div style={{
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