describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();
  }),
    it("has multiple statuses available", () => {
      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();

      cy.get("#campaign-log-status").click();

      cy.get("ul#campaign-log-status-options li").should("have.length", 69);
      cy.get("ul#campaign-log-status-options li")
        .first()
        .should("have.text", "A cooperative approach")
        .next()
        .should("have.text", "A friendly approach")
        .next()
        .should("have.text", "Aggressive approach")
        .next()
        .should("have.text", "A man's best friend")
        .next()
        .should("have.text", "A mysterious click");
    });
  it("can set, remove, stores and reset status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("A cooperative approach");

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().next().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("A cooperative approach");
    cy.get("#campaign-log-status-display > li").contains("A friendly approach");

    cy.get("#campaign-log-status").click();
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("A friendly approach");

    cy.reload();

    cy.get("#campaign-log-status-display > li").contains("A friendly approach");
  });
  it("can search for an status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").type("A mysterious click");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("A mysterious click");

    cy.get("#campaign-log-status").clear();
    cy.get("#campaign-log-status").type("Bullied");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-clear").click();
    cy.get("#campaign-log-status").type("Embarrassed");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display > li").contains("Embarrassed");
  });
  it("displays the effect of an status", () => {
    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();

    cy.get("#campaign-log-status").type("Master of undeath");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Master of undeath");
    cy.get("#campaign-log-status-display > li span").contains(
      "Whenever you take a Recall Action, after you resolve it, you may: SELF, CURSE 1. If you do, activate a small based Apparition of your choice. You control its turn during that activation (you may ignore its targeting priorities and force it to attack another Monster instead)."
    );

    cy.get("#campaign-log-status").type("Meek");
    cy.get("ul#campaign-log-status-options li").first().click();

    cy.get("#campaign-log-status-display").click();
    cy.get("#campaign-log-status-display > li").contains("Meek");
    cy.get("#campaign-log-status-display > li span").contains(
      "Whenever any Hero would drop to 0 HP or less, up to one other Hero may make a Wisdom (blue) Skill Challenge of Difficulty 15. Each Wisdom cube they have gives them a +2 bonus to their roll. If they succeed, they redirect the damage that would knock out that Hero to themselves (this damage can't be prevented or reacted to)."
    );
  });
});
