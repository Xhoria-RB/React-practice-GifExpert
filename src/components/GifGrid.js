import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
// import {getGifs} from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({category}) => {


  const {data: images, loading} = useFetchGifs(category);
  // const [images, setImages] = useState([]);
  // useEffect(()=> {
  //   getGifs(category)
  //     .then(setImages);
  // }, [category]);

    return (
      <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>

        {loading ? <p className='animate__animated animate__flash'>Cargando</p> : 
       ( <div className='card-grid'>
            {images.map(img => (
              <GifGridItem 
              key={img.id}
              {...img}
              // img={img}
              />)
              )}
        </div>)}
      </>
    )
}

GifGrid.propTypes = {
category: PropTypes.string
}

export default GifGrid;
