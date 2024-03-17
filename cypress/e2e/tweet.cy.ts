describe("authorization logic", () => {
  before(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  it("success authorization", () => {
    cy.visit("/auth");
    cy.get('input[name="email"]').type("test@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get("button").click().wait(3000);
    cy.url().should("include", "/profile");
  });

  it("add tweet", () => {
    cy.visit("/profile");
    cy.get("textarea").type("new tweet!!!");
    cy.get("button[data-testid='add-tweet-btn']").click();
  });
});
