import React, { useState } from 'react';

function addArtist() {
    const [artist, setArtist] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return( 
        <form onSubmit={handleSubmit}>
           <div>Add your Artist:</div>
           <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)}/>
           <input type="submit" />
        </form>);
}

export default addArtist;