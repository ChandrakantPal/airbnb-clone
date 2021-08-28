import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({})
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
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="text-2xl cursor-pointer animate-bounce">📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
