describe("background and traits selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has background and traits available", () => {
      cy.get("#story-record-background-and-trait").contains("Folk Hero");
      cy.get("#story-record-background-and-trait").contains("Knight of Amira");
      cy.get("#story-record-background-and-trait").contains("Redeemer");
      cy.get("#story-record-background-and-trait").contains("Passionate");
    });
  it("can set folk hero", () => {
    cy.get("input[id='story-record-background-and-trait-folk-hero']").should("not.be.checked");
    cy.get("input[id='story-record-background-and-trait-folk-hero']").check();
    cy.reload();
    cy.get("input[id='story-record-background-and-trait-folk-hero']").should("be.checked");
  });
  it("can set knight of amira", () => {
    cy.get("input[id='story-record-background-and-trait-knight-of-amira']").should("not.be.checked");
    cy.get("input[id='story-record-background-and-trait-knight-of-amira']").check();
    cy.reload();
    cy.get("input[id='story-record-background-and-trait-knight-of-amira']").should("be.checked");
  });
  it("can set redeemer", () => {
    cy.get("input[id='story-record-background-and-trait-redeemer']").should("not.be.checked");
    cy.get("input[id='story-record-background-and-trait-redeemer']").check();
    cy.reload();
    cy.get("input[id='story-record-background-and-trait-redeemer']").should("be.checked");
  });
  it("can set passionate", () => {
    cy.get("input[id='story-record-background-and-trait-passionate']").should("not.be.checked");
    cy.get("input[id='story-record-background-and-trait-passionate']").check();
    cy.reload();
    cy.get("input[id='story-record-background-and-trait-passionate']").should("be.checked");
  });
});
