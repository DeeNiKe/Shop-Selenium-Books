export class Home{
    homePageMacbook = ':nth-child(1) > .product-thumb > .image > a > .img-responsive'

    clickHomeMac(){
        cy.get(this.homePageMacbook).click()
    }
}