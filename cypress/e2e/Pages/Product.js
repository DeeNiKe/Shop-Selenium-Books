export class Product{
    productAddToCart = '#button-cart'

    clickProductCartButton(){
        cy.get(this.productAddToCart).click()
    }
}