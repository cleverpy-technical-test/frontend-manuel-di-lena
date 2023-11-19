/// <reference types="cypress" />

describe('E2E App test', () => {
    it('The main page should load', () => {
        cy.visit('http://localhost:3000/') 
        cy.contains('Technical Test') 
    })

    it('The post list should be shown', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('Login form can be opened', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Login').click()
        cy.contains('Email')
    })

    it('A new form must be created', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#btnIcon').click()
        cy.contains('New Post')
        cy.get('#title').type('Test post')
        cy.get('#content').type('Content test post')
        cy.get('#creator').type('1')
        cy.contains('Add Post').click()
        cy.contains('Content test post')
    })

    it('A post should be deleted', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.post:first-child #btnDel').click()
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').should('not.exist')
    })
})