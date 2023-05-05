describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-apocalypse").click();
  }),
    it("has multiple outcomes available", () => {
      cy.get("#story-record-outcome").click();

      cy.get("ul#story-record-outcome-options li").should("have.length", 32);
      cy.get("ul#story-record-outcome-options li")
        .first()
        .should("have.text", "A Good Deal")
        .next()
        .should("have.text", "Beautiful Lie")
        .next()
        .should("have.text", "Broken")
        .next()
        .should("have.text", "Exquisite Friends")
        .next()
        .should("have.text", "Friendly Advice");
    });
  it("can set, remove, stores and reset outcome", () => {
    cy.get("#story-record-outcome").click();
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("A Good Deal");

    cy.get("#story-record-outcome").click();
    cy.get("ul#story-record-outcome-options li").first().next().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("A Good Deal");
    cy.get("#story-record-outcome-display > li").contains("Beautiful Lie");

    cy.get("#story-record-outcome").click();
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Beautiful Lie");

    cy.reload();

    cy.get("#story-record-outcome-display > li").contains("Beautiful Lie");
  });
  it("can search for an outcome", () => {
    cy.get("#story-record-outcome").type("Blackriver");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("The Earl of Blackriver");

    cy.get("#story-record-outcome").clear();
    cy.get("#story-record-outcome").type("Unbroken");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-clear").click();
    cy.get("#story-record-outcome").type("No Quarter Given");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("No Quarter Given");
  });
  it("displays the effect of an outcome", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#story-record-outcome").type("Truthful");
    cy.get("ul#story-record-outcome-options li").first().click();

    cy.get("#story-record-outcome-display").click();
    cy.get("#story-record-outcome-display > li").contains("Truthful");
    cy.get("#story-record-outcome-display > li span").contains(
      "Heroes hit with Weapon attack and succeed on Skill Challenges whenever they roll 1 on the d20. Each Hero that also has a Class Ability that turns their natural 1 rolls into Weapon attack hits also scores a Critical Hit on these attacks."
    );
  });
});
