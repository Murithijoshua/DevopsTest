/// <reference types="cypress" />
before(()=>{
    cy
        .visit('/')
    cy
        .request('POST','/reset')
    cy
        .request('POST','/register',{email:"joshua@gmail.com",password:"1234"})
})
describe("Logging in a new user",()=>{
  it("Clicking",()=>{
    cy
      .get('[data-cy="login-menu"]')
      .click()
    cy
        .get('[data-cy="login-email"]')
        .type("joshua@gmail.com")
    cy
        .get('[data-cy="login-password"]')
        .type('124{enter}')
    cy
        .get('[data-cy="logged-user"]')
        .should('contain.text','joshua@gmail.com')
  })

})