/// <reference types = "cypress"/>
import {Product} from "./Pages/Product.js"
const product = new Product
import {Home} from "./Pages/Home.js"
const home = new Home

beforeEach(function(){
    cy.visit('https://awesomeqa.com/ui/')
})

it('Buying Macbook from featured',function(){
    home.clickHomeMac()
    product.clickProductCartButton()
    cy.get('.alert').contains('Success: You have added MacBook to your shopping cart!')
    //user click on shoping cart link
    cy.get('.alert > [href="https://awesomeqa.com/ui/index.php?route=checkout/cart"]').click()
    cy.get('.pull-right > .btn').click()
})