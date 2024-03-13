beforeEach(() => {
  cy.visit("http://localhost:5173/");
  // Belirli bir butona tıkla
  cy.contains("ACIKTIM").click(); // Buton metni burada belirtilmeli
});

it("should fill the form and submit", () => {
  // Boyut seç
  cy.get('[data-cy="size-buyuk"]').check();
  // Hamur seç
  cy.get('[data-cy="pastry"]').select("İnce");
  // Rastgele 6 adet ek malzeme seç
  cy.get('[data-cy^="malzeme-"]')
    .check({ multiple: true, timeout: 10000 })
    .should("be.checked")
    .should("have.length", 6);
  // Adı doldur
  cy.get('[data-cy="name"]').type("John Doe");
  // Notu doldur
  cy.get('[data-cy="note"]').type("Extra cheese, please");

  // Sipariş ver butonuna tıkla
  cy.get('[data-cy="order-button"]').click();

  // Formun submit edildiğini doğrula
  cy.url().should("include", "/success");
});
