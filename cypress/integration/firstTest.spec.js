///<reference types="Cypress"/>

// describe('Mobile phone replenishment',() => {
//   context ('Replenishment less than the allowed amount',() => {
//      it ('Show error: Minimum amount of the replenishment 1 UAH'),() => {

//      }
//   })
// })


// it ('By ID',() => {
//    cy.visit('https://www.facebook.com/')
//    cy.contains('Zezwól na korzystanie z niezbędnych i opcjonalnych plików cookie').click()
//    cy.get('.fcb > a').click()
//    cy.contains('Разрешить основные и необязательные cookie').click()
//    cy.get('#email')
// })

// it ('By Class',() => {
//    cy.visit('https://docs.cypress.io/api/commands/get')
//    cy.get('[class="DocSearch DocSearch-Button"]')
// })

// it ('By Tag',() => {
//    cy.visit('https://docs.cypress.io/api/commands/get')
//    cy.get('nav')
// })

// it.only('By Different Tag',() => {
//    cy.visit('https://www.facebook.com/')
//    cy.contains('Zezwól na korzystanie z niezbędnych i opcjonalnych plików cookie').click()
//    cy.get('.fcb > a').click()
//    cy.contains('Разрешить основные и необязательные cookie').click()
//    cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })

it('Using Get with Find and Eq',() => {
   cy.visit('https://next.privat24.ua/deposit/open')
   cy.get('tbody').find('td').find('div').find('button').eq('0')
})

it.only('Using Get with Find and Eq',() => {
   cy.viewport(1800, 700)
   cy.visit('https://docs.cypress.io/api/commands/location#Syntax')
   cy.get('div').find('nav').find('ul').find('li').find('a').eq(0)
})
