describe('template spec', () => {
  it('By ID', () => {
    cy.visit('http://www.facebook.com/?stype=lo&jlou=AfdYDmB0dlXmIkmJITdwYIipt4aettlkWBgCPhj4R5uxajiSyaOuiCrGo3MSKjlokGcvmqXkqIXju9njcuKwhNJJe6rzw0aGdsNOo-h0If_Rew&smuh=44245&lh=Ac8gw0-8jw9h0sNz7iM')
    cy.get('#email')
  })
  });

  it('By Class', () => {
    cy.visit('http://docs.cypress.io/api/commands/and')
    cy.get('nav')
  })

  it('By Different Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/and')
    cy.get('button[type="button"][aria-label="Close"]')
  })

  it('By Contains name', () => {
    cy.visit('https://docs.cypress.io/api/commands/and')
    cy.get('button[type="button"][aria-label="Close"]')
  })


  it('By Contains name', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
  })

  it.only('By Contains name', () => {
    cy.viewport(1800,700)
    cy.visit('https://docs.cypress.io/api/commands/and')
    cy.get('aside').find('div').find('ol').find('li').find('a')
  })