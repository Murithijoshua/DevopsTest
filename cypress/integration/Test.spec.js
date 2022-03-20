/// <reference types="cypress" />
before(()=>{
   cy
        .request('POST',"/reset")
    cy
        .visit('/')
    
})
describe("Trello Test:",()=>{
    // test correct url
    it("Testing Homepage url",()=>{
        cy
            .url()
            .should('contain','/')

    })

    // test if the homepage contains the "My Boards"
    it("checking if this contains the My boards",()=>{
        cy
            .get('.background_container > :nth-child(3)')
            .should("contain","My Boards")

    })
    // adding a board
    it("adding a new board",()=>{
        cy
            .get('[data-cy="create-board"]')
            .click()
        cy
            .get('[data-cy="new-board-input"]')
            .type("this is my first Board!{enter}")
        cy
            .url().should('contain', '/board/')
    })
})