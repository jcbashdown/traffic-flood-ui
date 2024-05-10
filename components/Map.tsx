'use client'
import React, { useEffect, useRef } from 'react'
import { MapContainer, ImageOverlay, SVGOverlay, TileLayer } from 'react-leaflet'
import { CRS, LatLngBoundsExpression } from 'leaflet'

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
    const bounds: LatLngBoundsExpression = [
        [-1.3993664696339427, 36.71360986600999], // Southwest corner
        [-1.1848443097557453, 36.928186587201395], // Northeast corner
    ]

    return (
        <MapContainer
            ref={mapRef}
            center={[-1.279924177522545, 36.8187184497727]}
            zoom={14}
            minZoom={12}
            style={{ width: '100%', height: '100%' }}
            maxBounds={bounds}
            maxBoundsViscosity={1}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                opacity={0.5}
            />
            <SVGOverlay bounds={bounds}>
                <svg viewBox="0 0 10000 10000">
                    <image href={`/traffic_svgs/${selectedTrafficMap}`} width="10000" height="10000" />
                </svg>
            </SVGOverlay>
        </MapContainer>
    )
}

export default Map
