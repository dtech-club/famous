const Discography = ({discography}) => {
    return (
        <div>
            <h2>Discography</h2>
            <ul>
                {discography.map((album) => (
                    <li key={album.id}>
                        <img src={album.albumImage} alt={album.title} />
                        <p>{album.title}</p>
                        <p>{album.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Discography;
