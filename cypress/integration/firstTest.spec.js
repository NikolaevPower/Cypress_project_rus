///<reference types="Cypress"/>

//type
it('type',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="phone-number"]')
      .type(11223344)
})

//focus
it('focus',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="amount"]')
      .focus()
})

//blur
it('blur',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="amount"]')
      .focus()
      .blur()
})

//clear
it('clear',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="amount"]')
      .type(1234567)
      .wait(2000)
      .clear()
})

//submit
it('submit',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('form[method="post"]')
      .submit()
})

//click
it('click',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-value="manual"]')
      .click()
})

//rightclick
it('rightclick',() => {
   cy.visit('https://example.cypress.io/commands/actions')
      .contains('Right click to edit')
      .rightclick()
})

//doubleclick
it('doubleclick',() => {
   cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
      .contains('My Card')
      .dblclick()
})

//check
it('check',() => {
   cy.visit('https://www.facebook.com/')
      .contains('Zezwól na korzystanie z niezbędnych i opcjonalnych plików cookie').click()
      .get('.fcb > a').click()
      .get('[data-cookiebanner="accept_button"]')
      .click()
      .get('[data-testid="open-registration-form-button"]')
      .click()
      .get('input[value="2"]')
      .check()
})

//select
it('select',() => {
   cy.visit('https://www.facebook.com/')
      .contains('Zezwól na korzystanie z niezbędnych i opcjonalnych plików cookie').click()
      .get('.fcb > a').click()
      .get('[data-cookiebanner="accept_button"]')
      .click()
      .get('[data-testid="open-registration-form-button"]')
      .click()
      .get('#month')
      .select('апр')
      
      .get('#day')
      .select('28')
      
      .get('#year')
      .select('1994')
})

//scrollIntoView
it('scrollIntoView',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .get('[data-qa-node="lang"]')
      .wait(2000)
      .scrollIntoView()
})

//scrollTo
it('scrollTo',() => {
   cy.visit('https://next.privat24.ua/mobile?lang=en')
      .wait(2000)
      cy.scrollTo(0, 500)
})

//trigger
it.only('trigger',() => {
   cy.visit('https://next.privat24.ua/?lang=en')
      .contains('Services')
      .wait(2000)
      .trigger('mouseover')
})









