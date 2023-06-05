import ArtistImage from "../page_components/ArtistImage";
import ArtistName from "../page_components/ArtistName";
import ArtistBiography from "../page_components/ArtistBiography";
import ArtistPersonalInfo from "../page_components/ArtistPersonalInfo";



const ArtistAllInfo = ({data}) => {
    return (
        <div id="artist-information">
            <section className="image-section">
                <ArtistImage url={data?.artistImage} />
            </section>
            <section className="name-section">
                <ArtistName name={data?.artistName} />
            </section>
            <section className="biography-section">
                <ArtistBiography biography={data?.biography} />
            </section>
            <section className="personal-section">
                <ArtistPersonalInfo
                    city={data?.city}
                    country={data?.state}
                    genre={data?.genre}
                />
                <p>
                    Here is the info Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Inventore dolor earum voluptatem, nihil
                    ullam hic, delectus provident libero rerum officiis
                    assumenda quaerat non possimus facere, accusantium
                    dignissimos? Totam, provident eaque?
                </p>
            </section>
        </div>
    );
};
export default ArtistAllInfo;
