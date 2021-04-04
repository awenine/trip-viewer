import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import LocationCard from "./LocationCard";

test('Location Card rendering with place name in Router', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <LocationCard locationName={'Testable Placename'} locationId={1234} />
    </Router>
  )
  expect(screen.getByText(/Testable Placename/i)).toBeInTheDocument()
})
