// tslint:disable-next-line:no-namespace
declare namespace Cypress {
  export interface Chainable<Subject =any>{

    /** @param {number} nth - zero-based index */
    getWithAutoId: (
      id: string,
      nth?: number | Partial<Cypress.SelectOptions & Cypress.Withinable>,
      options?: Partial<Cypress.SelectOptions & Cypress.Withinable>
    ) => Chainable<JQuery<HTMLElement>>

    /** @param {number} nth - zero-based index */
    clickOnAutoId: (
      id: string,
      nth?: number | Partial<Cypress.SelectOptions & Cypress.Withinable>,
      options?: Partial<Cypress.SelectOptions & Cypress.Withinable>
    ) => Chainable<JQuery<HTMLElement>>

  }
}

