describe("authorization logic", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  it("invalid credentials", () => {
    cy.visit("/auth");
    cy.get('input[name="email"]').type("test11111@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get("button").click().wait(1000);
    cy.get('[data-testid="toast"]').should("exist");
  });

  it("success authorization", () => {
    cy.visit("/auth");
    cy.get('input[name="email"]').type("test@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get("button").click().wait(3000);
    cy.url().should("include", "/profile");
  });
});
