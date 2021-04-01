/// <reference types="cypress" />

context('Shenlong Invation Test', () => {
  before(() => {
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })
  it('Should not invocate Shenlong if dont have all dragon balls', () => {
    cy.get('[data-testid="card-shenlong"]').should('exist')
    cy.get('[data-testid="invoke-button"]').click()
    cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
    cy.get('[data-testid="back"]').click()
  })
})

context('Validating Sphere Test', () => {
  before(() => {
    cy.visit('http://localhost:3000/dragon-ball-manager')
  })
  it('Should validate the second sphere', () => {
    cy.get('span').eq(1).should('have.text', 'Não encontrada')
    cy.get('button').eq(1).should('have.text', 'encontrei').click()
    cy.get('[name="ballcode"]').type('1234')
    cy.get('button').eq(4).should('have.text', 'Validar').click()
    cy.get('span').eq(1).should('have.text', 'Encontrada')
  })
})
