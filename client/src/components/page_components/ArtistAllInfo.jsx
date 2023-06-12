import ArtistImage from "../page_components/ArtistImage";
import ArtistName from "../page_components/ArtistName";
import ArtistBiography from "../page_components/ArtistBiography";
import ArtistPersonalInfo from "../page_components/ArtistPersonalInfo";

const ArtistAllInfo = ({ artist }) => {
  return (
    <div id="artist-information">
      <section className="image-section">
        <ArtistImage url={artist?.artistImage} />
      </section>
      <section className="name-section">
        <ArtistName name={artist?.artistName} />
      </section>
      <section className="biography-section">
        <ArtistBiography biography={artist?.biography} />
      </section>
      <section className="personal-section">
        <ArtistPersonalInfo
          city={artist?.city}
          country={artist?.state}
          genre={artist?.genre}
        />
        <p>
          Here is the info Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Inventore dolor earum voluptatem, nihil ullam hic, delectus
          provident libero rerum officiis assumenda quaerat non possimus facere,
          accusantium dignissimos? Totam, provident eaque?
        </p>
      </section>
    </div>
  );
};
export default ArtistAllInfo;
