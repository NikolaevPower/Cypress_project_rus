///<reference types="Cypress"/>

it('',() => {
   cy.visit('https://next.privat24.ua/?lang=en')
   cy.contains('Sign in')
})

it('',() => {
   cy.visit('https://next.privat24.ua/?lang=en')
   cy.contains('div','Sign in')
})

it('',() => {
   cy.visit('https://next.privat24.ua/?lang=en')
   cy.contains('SIGN IN', {matchCase:false});
})

it.only('',() => {
   cy.visit('https://next.privat24.ua/?lang=en')
   cy.get('footer').contains('© 2022 PrivatBank NBU license No. 22 dated March 19, 1992');
})