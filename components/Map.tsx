import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

const Map = ({ searchResults }) => {
  // transforming the search results
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center: any = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
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
