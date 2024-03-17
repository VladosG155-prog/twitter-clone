describe("registration spec", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  it("show errors when fields inavalid", () => {
    cy.visit("/registration");
    cy.get("button[type='submit']").click().should("be.disabled");
  });
  it("registration user", () => {
    cy.intercept(
      "POST",
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBblO9x6GvL8IPwd-wWoo-0zhll_gQ2aiU",
      {
        body: {},
      }
    );
    cy.visit("/registration");
    cy.get('input[name="email"]').type("test123@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get('input[name="tel"]').type("+375297684465");
    cy.get('input[name="name"]').type("Васик");
    cy.get("button[type='submit']").click();
    cy.visit("/auth");
  });
});
