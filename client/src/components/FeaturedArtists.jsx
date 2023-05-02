const FeaturedArtists = () => {
  return (
    <div className="artists-section">
      <div className="artists-menu">
        <p>{/* here we will make the featured artists */}</p>
        <p>Featured artists</p>
        <button className="view-artists">View all</button>
      </div>
      <div className="artists">
        <div className="small-artists">first artist</div>
        <div className="small-artists">second artist</div>
        <div className="small-artists">third artist</div>
        <div className="small-artists">fourth artist</div>
      </div>
    </div>
  );
};

export default FeaturedArtists;
