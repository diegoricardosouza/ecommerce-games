/// <reference path="../support/index.d.ts" />

import { priceFields, genreFields, platformFields, sortFields} from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(sortFields)
    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(genreFields)
  })

  it('should show 15 games and show more games when show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('R$ 0,00').should('exist')
    })

    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('R$ 0,00').should('not.exist')
    })
  })

  it('should filter by platform and genre', () => {
    cy.findByText(/windows/i).click()
    cy.location('href').should('contain', 'platforms=windows')

    cy.findByText(/linux/i).click()
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText(/mac os/i).click()
    cy.location('href').should('contain', 'platforms=mac')

    cy.findByText(/action/i).click()
    cy.location('href').should('contain', 'categories=action')
  })

  it('should return empty when no games match', () => {
    cy.visit('/games')

    cy.findByText(/free/i).click()
    cy.findByText(/linux/i).click()
    cy.findByText(/sports/i).click()

    cy.getByDataCy('game-card').should('not.exist')
    cy.findByText(/We didn't find any games with this filter/i).should('exist')
  })
})
