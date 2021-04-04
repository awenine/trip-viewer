import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import SearchBar from "./SearchBar";

test('component renders text input', () => {
  render(
    <SearchBar handleChange={(x) => (x)} content=''/>
  )
  expect(screen.getByRole("textbox")).toBeInTheDocument()
})