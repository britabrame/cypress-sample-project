class homePage {

    elements = {
        searchBox: () => cy.get('#search', { timeout: 10000 }).should('be.visible'),
        autocompleteDropdown: () => cy.get('#search_autocomplete', { timeout: 10000 }).should('be.visible'),
        autocompleteOptionItems: () => cy.get('ul[role="listbox"]', { timeout: 10000 }).find('span.qs-option-name').should('be.visible')
    }

    searchAndPressEnter(input) {
        let inputAndEnterKey = `${input}{enter}`;
        this.elements.searchBox().type(inputAndEnterKey);
    }

    searchWithAutocomplete(input, option) {
        this.elements.searchBox().type(input)
        this.elements.autocompleteDropdown().contains(option).click()
    }

}

module.exports = new homePage();