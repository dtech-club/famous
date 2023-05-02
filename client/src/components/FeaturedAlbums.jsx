const FeaturedAlbums = () => {
  return (
    <div className="albums-section">
      <div className="albums-menu">
        <p>{/* here we will make the featured artists */}</p>
        <p>Featured albums</p>
        <button className="view-artists">View all</button>
      </div>
      <div className="albums">
        <div className="small-album">first album</div>
        <div className="small-album">second album</div>
        <div className="small-album">third album</div>
        <div className="small-album">fourth album</div>
      </div>
    </div>
  );
};

export default FeaturedAlbums;
