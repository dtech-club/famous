// const Discography = ({ discography, index }) => {
//     console.log(discography);
//     return (
//         <div>
//             <h2>Discography</h2>
//             <ul>

//                 {discography.map((album) => {
//                     return (
//                         <li key={index}>

//                             <img src={album.albumImage} alt={album.albumName} />
//                             <p>{album.albumName}</p>
//                             <p>{album.releaseDate}</p>
//                             <p>{album.genre}</p>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default Discography;

const Discography = ({ discography }) => {
    return (
      <div>
        <h2>Discography</h2>
        <ul>
          {discography.map((album, index) => {
            return (
              <li key={index}>
                <img src={album.albumImage} alt={album.albumName} />
                <p>{album.albumName}</p>
                <p>{album.releaseDate}</p>
                <p>{album.genre}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default Discography;