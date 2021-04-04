import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import DetailsPage from "./DetailsPage";

test('Details Page rendering', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <DetailsPage />
    </Router>
  )
  expect(screen.getByText(/Location/i)).toBeInTheDocument()
})
