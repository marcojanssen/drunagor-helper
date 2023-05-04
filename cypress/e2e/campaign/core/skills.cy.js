describe("skill selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
    cy.get(".hero-detail-btn").click();
  }),
    it("has all categories", () => {
      cy.get("div.skill-container .skill").should("have.length", 5);

      cy.get("div.skill-container").contains("Dungeon Role");
      cy.get("div.skill-container").contains("Melee");
      cy.get("div.skill-container").contains("Ranged");
      cy.get("div.skill-container").contains("Agility");
      cy.get("div.skill-container").contains("Wisdom");
    });
  it("can select and unselect skills", () => {
    cy.get("div.skill-container #dungeon-role-1").check();
    cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");

    cy.reload();

    cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");

    cy.get("div.skill-container #agility-1").check();
    cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");
    cy.get("div.skill-container #agility-1").should("be.checked").and("have.value", "agility-1");

    cy.get("div.skill-container #dungeon-role-1").uncheck();
    cy.get("div.skill-container #dungeon-role-1").should("not.be.checked");
    cy.get("div.skill-container #agility-1").should("be.checked").and("have.value", "agility-1");

    cy.reload();
    cy.get("div.skill-container #dungeon-role-1").should("not.be.checked");
    cy.get("div.skill-container #agility-1").should("be.checked").and("have.value", "agility-1");
  });
});
