class searchResultsPage {

    elements = {
        // span[data-ui-id="page-title-wrapper"]
        pageTitleWrapper: () => cy.get('span[data-ui-id="page-title-wrapper"]'),
        productItems: () => cy.get('.products.list.items.product-items').find('.item.product.product-item')
    }

}

module.exports = new searchResultsPage();