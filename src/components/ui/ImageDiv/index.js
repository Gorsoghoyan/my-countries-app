
function ImageDiv({
  width,
  height,
  image,
  size = "cover",
  position = "center",
  repeat = "no-repeat",
  borderRadius = "50%"
}) {
  return (
    <div style={{
      width,
      height,
      borderRadius,
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat
    }}></div>
  );
}

export default ImageDiv;