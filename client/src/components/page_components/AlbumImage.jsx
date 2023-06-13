const AlbumImage = ({ url }) => {
  return (
    <div>
      <img style={{ width: "50%" }} src={url} alt="Album" />
    </div>
  );
};
export default AlbumImage;
