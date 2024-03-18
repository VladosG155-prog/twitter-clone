describe("registration spec", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  it("show errors when fields inavalid", () => {
    cy.visit("/registration");
    cy.get("button[type='submit']").click().should("be.disabled");
  });
  it("registration user", () => {
    cy.visit("/registration");
    cy.get('input[name="email"]').type("test@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get('input[name="tel"]').type("+375297684465");
    cy.get('input[name="name"]').type("Васик");
    cy.get("button[type='submit']").click();
    cy.visit("/auth");
  });
});
