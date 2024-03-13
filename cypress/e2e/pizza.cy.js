beforeEach(() => {
  cy.visit("http://localhost:5173/");

  cy.contains("ACIKTIM").click(); // Ana sayfadaki butona tıkla
});

it("FORMU DOLDUR VE GÖNDER", () => {
  // Rastgele boyut seç
  cy.get("#sizeTEST input[type=radio]")
    .should("be.visible")
    .then(($radios) => {
      const radios = $radios.toArray();
      const randomRadio = Cypress._.sample(radios);
      cy.wrap(randomRadio).check();
    }); // Rastgele hamur seç
  cy.get('[data-cy="pastry"]')
    .should("be.visible")
    .then(($select) => {
      const options = $select.find("option").toArray();
      const randomOption = Cypress._.sample(options);
      const value = randomOption.value;
      cy.get('[data-cy="pastry"]').select(value);
    });
  // Rastgele 6 adet ek malzeme seç

  cy.get("#checkboxes input[type=checkbox]")
    .should("be.visible")

    .then(function ($items) {
      return Cypress._.sampleSize($items.toArray(), 5);
    })
    .should("have.length", 5)
    .click({ multiple: true });
  cy.get("#checkboxes input[type=checkbox]:checked").should("have.length", 5);
  // Adı doldur
  cy.get('[data-cy="name"]').type("Burak Şenel");
  // Notu doldur
  cy.get('[data-cy="note"]').type(
    "Ekstra peynirli olsun bir de iyi pişsin plss"
  );

  // Sipariş ver butonuna tıkla
  cy.get('[data-cy="order-button"]').click();

  // Formun submit edildiğini doğrula
  cy.url().should("include", "/success");
});
