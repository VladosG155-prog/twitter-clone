describe("theme toggle spec", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  it("theme is gonna change", () => {
    cy.visit("/auth");
    cy.get('input[name="email"]').type("test@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get("button").click().wait(5000);
    cy.url().should("include", "/profile");
    cy.get('[data-testid="switch"]').click();
    cy.get("body").should("have.attr", "data-theme", "dark");
  });
});
