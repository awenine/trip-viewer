import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import SearchPage from "./SearchPage";

test('Search Page renders search bar', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <SearchPage />
    </Router>
  )
  expect(screen.getByRole("textbox")).toBeInTheDocument()
})
