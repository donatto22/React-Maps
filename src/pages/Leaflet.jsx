import { useEffect, useState } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { getCoordinates } from '../utils/getCoordinates'

// import 'leaflet/dist/leaflet.css'

const Leaflet = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const get = async () => {
            const data = await getCoordinates()
            console.log(data)
            setLocations(data)
        }
        get()
    }, [])

    return (
        <MapContainer zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.map(l => (
                    <Marker key={l.id} position={[l.latitude, l.altitude]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default Leaflet
