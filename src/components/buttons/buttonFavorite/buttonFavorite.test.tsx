import { render } from '@testing-library/react'
import { ButtonFavorite } from './buttonfavorite'

  const mockFavoriteDados = {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    imdbID: "tt1201607",
  };


describe("buttonFavorite", () => {
  it("deve renderizar o component", () => {
    const { getByAltText } = render(
      <ButtonFavorite favoriteDados={mockFavoriteDados} bg={"transparent"} />
    );
    const buttonFavorite = getByAltText("favorite")
    expect(buttonFavorite).toBeInTheDocument()
  })
})