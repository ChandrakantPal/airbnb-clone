import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  })
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chandrakantpal/cksqbkcva10i218o5gtf79drz"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  )
}

export default Map
