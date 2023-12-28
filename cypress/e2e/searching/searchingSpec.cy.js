describe('Search Box ', function () {

    it('generates correct autosuggest options when the user enters 3 characters', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('#search').type('tan')
        cy.wait(2000)
        // Iterate over dropdown options and verify that each contains the typed term
        cy.get('ul[role="listbox"]').find('span.qs-option-name').each(($el, index, $list) => {
            cy.wrap($el).invoke('text').should('match', /tan/i)
        })
    })

    it('allows search using autosuggest options', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        cy.get('#search').type('tan')
        cy.wait(4000)
        cy.get('ul[role="listbox"]').contains('tank').click()
        // Verify the dynamic search results text displayed in header
        cy.get('.base').should('have.text', 'Search results for: \'tank\'')
        // Verify the number of items displayed
        cy.get('.products.list.items.product-items').find('.item.product.product-item').should('have.length', 12)
    })

    it('allows search by manually typing a search', () => {
        cy.visit('https://magento.softwaretestingboard.com')
        // Manually enter the full serch term and hit Enter
        cy.get('#search').type('tank{enter}')
        cy.wait(2000)
        // Verify the dynamic search results text displayed in header
        cy.get('.base').should('have.text', 'Search results for: \'tank\'')
        // Verify the number of items displayed ,
        cy.get('.products.list.items.product-items').find('.item.product.product-item').should('have.length', 12)
    })
})
