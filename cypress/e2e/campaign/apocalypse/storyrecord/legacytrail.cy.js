describe("legacy trail selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has legacy trails available", () => {
      cy.get("#story-record-legacy-trail").contains("Perseverance");
      cy.get("#story-record-legacy-trail").contains("Tragedy");
      cy.get("#story-record-legacy-trail").contains("Doom");
      cy.get("#story-record-legacy-trail").contains("Heroism");
    });
  it("can set perseverance", () => {
    cy.get("input[name='perseverance'][value='0']").should("be.checked");
    cy.get("input[name='perseverance'][value='1']").check();
    cy.get("input[name='perseverance'][value='2']").check();
    cy.get("input[name='perseverance'][value='3']").check();
    cy.get("input[name='perseverance'][value='2']").check();
    cy.reload();
    cy.get("input[name='perseverance'][value='2']").should("be.checked");
    cy.get("input[name='perseverance'][value='0']").check();
    cy.reload();
    cy.get("input[name='perseverance'][value='0']").should("be.checked");
  });
  it("can set tragedy", () => {
    cy.get("input[name='tragedy'][value='0']").should("be.checked");
    cy.get("input[name='tragedy'][value='1']").check();
    cy.get("input[name='tragedy'][value='2']").check();
    cy.get("input[name='tragedy'][value='3']").check();
    cy.get("input[name='tragedy'][value='2']").check();
    cy.reload();
    cy.get("input[name='tragedy'][value='2']").should("be.checked");
    cy.get("input[name='tragedy'][value='0']").check();
    cy.reload();
    cy.get("input[name='tragedy'][value='0']").should("be.checked");
  });
  it("can set doom", () => {
    cy.get("input[name='doom'][value='0']").should("be.checked");
    cy.get("input[name='doom'][value='1']").check();
    cy.get("input[name='doom'][value='2']").check();
    cy.get("input[name='doom'][value='3']").check();
    cy.get("input[name='doom'][value='2']").check();
    cy.reload();
    cy.get("input[name='doom'][value='2']").should("be.checked");
    cy.get("input[name='doom'][value='0']").check();
    cy.reload();
    cy.get("input[name='doom'][value='0']").should("be.checked");
  });
  it("can set heroism", () => {
    cy.get("input[name='heroism'][value='0']").should("be.checked");
    cy.get("input[name='heroism'][value='1']").check();
    cy.get("input[name='heroism'][value='2']").check();
    cy.get("input[name='heroism'][value='3']").check();
    cy.get("input[name='heroism'][value='2']").check();
    cy.reload();
    cy.get("input[name='heroism'][value='2']").should("be.checked");
    cy.get("input[name='heroism'][value='0']").check();
    cy.reload();
    cy.get("input[name='heroism'][value='0']").should("be.checked");
  });
});
