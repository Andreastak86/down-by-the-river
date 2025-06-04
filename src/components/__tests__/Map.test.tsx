import React from 'react'
import { render } from '@testing-library/react'
import Map from '../Map'

jest.mock('leaflet', () => ({
  map: jest.fn(() => ({
    setView: jest.fn().mockReturnThis(),
  })),
  tileLayer: jest.fn(() => ({ addTo: jest.fn() })),
  geoJSON: jest.fn(() => ({
    bindPopup: jest.fn().mockReturnThis(),
    addTo: jest.fn(),
  })),
}))

describe('Map', () => {
  it('renders map container', () => {
    const { container } = render(<Map />)
    expect(container.querySelector('#map')).toBeInTheDocument()
  })
})
