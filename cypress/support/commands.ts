  const autoIdSelector = (id: string, nth?: number) =>
  `[data-testid="${id}"]${typeof nth === 'number' ? `:eq(${nth})` : ''}`
  
  const sanitizeOptions = <T = Partial<Cypress.SelectOptions>>(
    nth?: number | T,
    options?: T
  ): { nth?: number; options?: T } => {
    return typeof nth === 'number' ? { nth, options } : { options: nth }
  }

  Cypress.Commands.add('getWithAutoId', (id, _nth, _options) => {
    const { nth, options } = sanitizeOptions<
      Partial<Cypress.SelectOptions & Cypress.Withinable>
    >(_nth, _options)
    return cy.get(autoIdSelector(id, nth), options)
  })
  
  Cypress.Commands.add('clickOnAutoId', (id, nth, options) =>
    cy.getWithAutoId(id, nth, options).should('exist').scrollIntoView().click()
  )
  