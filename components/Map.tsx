'use client'
import React, { useEffect, useRef } from 'react'
import { MapContainer, ImageOverlay, SVGOverlay } from 'react-leaflet'
import { CRS } from 'leaflet'

import { useAppSelector } from '@/lib/redux/hooks'
import { selectTrafficMap } from '@/lib/redux/store'

import 'leaflet/dist/leaflet.css'

const Map = () => {
    const selectedTrafficMap = useAppSelector(selectTrafficMap)

    const mapRef = useRef<L.Map>(null)

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.invalidateSize()
        }
    }, [])

    return (
        <MapContainer
            ref={mapRef}
            center={[5000, 5000]}
            minZoom={-2}
            maxZoom={2}
            zoom={-2}
            crs={CRS.Simple}
            style={{ width: '100%', height: '100%' }}
            maxBounds={[
                [0, 0],
                [10000, 10000],
            ]}
            maxBoundsViscosity={1}
        >
            <ImageOverlay
                url="/background-map.png"
                bounds={[
                    [0, 0],
                    [10000, 10000],
                ]}
            />
            <SVGOverlay
                bounds={[
                    [0, 0],
                    [10000, 10000],
                ]}
            >
                <svg viewBox="0 0 10000 10000">
                    <image href={`/traffic_svgs/${selectedTrafficMap}`} width="10000" height="10000" />
                </svg>
            </SVGOverlay>
        </MapContainer>
    )
}

export default Map
