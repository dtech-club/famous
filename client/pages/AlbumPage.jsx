import Image from '../page_components/Image.jsx';
import Name from '../page_components/Name.jsx';
import Biography from '../page_components/Biography.jsx';
import Discography from '../page_components/Discography.jsx';
import PersonalInfo from '../page_components/PersonalInfo.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AlbumPage = () => {
    const { state } = useLocation();
  return (
    <div>AlbumPage</div>
    
  )
}
export default AlbumPage