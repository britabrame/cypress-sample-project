import homePage from "../../fixtures/pages/homePage.js"
import searchResultsPage from "../../fixtures/pages/searchResultsPage.js"

describe('Search Box ', function () {
    beforeEach(() => {
        // Visit the configured baseURL
        cy.visit('/')
    })

    it('generates correct autosuggest options when the user enters 3 characters', () => {
        homePage.elements.searchBox().type('tan')
        // Iterate over dropdown options and verify that each contains the typed term
        homePage.elements.autocompleteOptionItems().each(($el, index, $list) => {
            cy.wrap($el).invoke('text').should('match', /tan/i)
        })
    })

    it('allows search using autosuggest options', () => {
        // cy.get('#search').type('tan')
        homePage.searchWithAutocomplete('tan', 'tank')
        // Verify the dynamic search results text displayed in header
        searchResultsPage.elements.pageTitleWrapper().should('have.text', 'Search results for: \'tank\'')
        // Verify the number of items displayed
        searchResultsPage.elements.productItems().should('have.length', 12)
    })

    it('allows search by manually typing a search', () => {
        // Manually enter the full serch term and hit Enter
        homePage.searchAndPressEnter('tank')
        // Verify the dynamic search results text displayed in header
        searchResultsPage.elements.pageTitleWrapper().should('have.text', 'Search results for: \'tank\'')
        // Verify the number of items displayed
        searchResultsPage.elements.productItems().should('have.length', 12)
    })
})