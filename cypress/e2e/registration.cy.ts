describe("registration spec", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });
  beforeEach(() => {
    cy.intercept("POST", "identitytoolkit.googleapis.com/*", (req) => {
      req.headers["Custom-My-Header"] = "allo";
    });
  });
  it("show errors when fields inavalid", () => {
    cy.visit("/registration");
    cy.get("button").click().should("be.disabled");
  });
  it("registration user", () => {
    cy.visit("/registration", {
      headers: {
        origin: "http://localhost:5173",
      },
    });
    cy.get('input[name="email"]').type("test123123@gmail.com");
    cy.get('input[name="password"]').type("2312247");
    cy.get('input[name="tel"]').type("+375297684465");
    cy.get('input[name="name"]').type("Васик");
    cy.get("button").click();
    cy.visit("/auth");
  });
});
