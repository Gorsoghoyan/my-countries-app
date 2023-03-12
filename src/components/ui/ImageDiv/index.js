
function ImageDiv({
  width,
  height,
  url,
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
      backgroundImage: `url(${url})`,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundRepeat: repeat
    }}></div>
  );
}

export default ImageDiv;