///<reference types="Cypress"/>
import { mobileReplenishment } from "..//support/pages/mobileReplenishment"
import { transfers } from "..//support/pages/transfers"
import { basePage } from "..//support/pages/basePage"


it('Replenishment of Ukraine mobile phone number',() => {
   basePage.open('https://next.privat24.ua/mobile?lang=en')
   mobileReplenishment.typePhoneNumber('686979712')
   basePage.typeAmount(1)
   basePage.typeDebitCardData('4552331448138217','0524','111')
   basePage.submitPayment()
   mobileReplenishment.checkDebitCard('4552 **** **** 8217')
   cy.wait(2000)
   mobileReplenishment.checkDebitAmount('1','UAH')
   mobileReplenishment.checkDebitAmountCommission('2')
   mobileReplenishment.checkPaymentCurrency('UAH')
})

it('Money transfer between foreign cards',() => {
   basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
   cy.wait(1000)
   basePage.typeDebitCardData('4552 3314 4813 8217','0524','111')
   transfers.typeDebitNameAndSurname('Shayne','McConnell')
   transfers.typeDebitReceiverCard('5309233034765085')
   basePage.typeAmount('500')
   transfers.typeComment('Cypress Test')
   basePage.submitPayment()
   transfers.checkDebitAndReceiverCard('4552 3314 4813 8217','5309 2330 3476 5085')
   transfers.checkDebitAmountandTotal('500 UAH','598.59')
   transfers.checkDebitCommission('98.59 UAH')
   transfers.checkReceiverName('UNDEFINED UNDEFINED')
   transfers.checkReceiverAmount('500 UAH')
   transfers.checkComment('Cypress Test')   
})