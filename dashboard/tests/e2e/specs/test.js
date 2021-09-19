// https://docs.cypress.io/api/introduction/api.html

describe('Scan result submit Test Suite', () => {
  it('Visits submit scan result page', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'Submit scan result')
  })

  it('Submit form', () => {
    cy.get('[data-cy=repositoryName-input]').type('First repository', { force: true })

    cy.get('.dropdown-trigger').click()
    cy.wait(1000)
    cy.get('.select-dropdown li')
      .eq(1)
      .click()

    cy.get('.finding-items div').eq(0)
      .then(($item) => {
        cy.wrap($item).find('#FType').type('sast', { force: true })
        cy.wrap($item).find('#FRuleId').type('G402', { force: true })
        cy.wrap($item).find('#FLocationPath').type('connectors/apigateway.go', { force: true })
        cy.wrap($item).find('#FLocationPos').type('60', { force: true })
        cy.wrap($item).find('#FMetadataDesc').type('TLS InsecureSkipVerify set true.', { force: true })
        cy.wrap($item).find('#FMetadataSev').type('HIGH', { force: true })
      })

    cy.get('.save-result').click()
    cy.wait(1000)
    cy.contains('.submit-message', 'The scan result was created successfully!')
  })
})
