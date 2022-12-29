describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple statuses available", () => {
      cy.get("#party-add-hero").click();
      cy.get("div#party-add-heroes div").first().click();
      cy.get(".hero-overview").click();

      cy.get("#hero-status").click();

      cy.get("ul#hero-status-options li").should("have.length", 66);
      cy.get("ul#hero-status-options li")
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
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-status").click();
    cy.get("ul#hero-status-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Status: A cooperative approach");

    cy.get(".hero-overview").click();
    cy.get("#hero-status").click();
    cy.get("ul#hero-status-options li").first().next().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Status: A cooperative approach, A friendly approach");

    cy.get(".hero-overview").click();
    cy.get("#hero-status").click();
    cy.get("ul#hero-status-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Status: A friendly approach");

    cy.reload();

    cy.get(".hero-overview").contains("Status: A friendly approach");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
  it("can search for an status", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-status").type("A mysterious click");
    cy.get("ul#hero-status-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Status: A mysterious click");

    cy.get(".hero-overview").click();

    cy.get("#hero-status").clear();
    cy.get("#hero-status").type("Bullied");
    cy.get("ul#hero-status-options li").first().click();

    cy.get("#hero-status-clear").click();
    cy.get("#hero-status").type("Embarrassed");
    cy.get("ul#hero-status-options li").first().click();

    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Status: Embarrassed");
  });
  it("can clear status", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-status").type("A mysterious click");
    cy.get("ul#hero-status-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Status: A mysterious click");

    cy.get(".hero-overview").click();
    cy.get("#hero-status-clear").click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("No aura, status or outcome");
  });
  it("displays the effect of an status", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#hero-status").type("Master of undeath");
    cy.get("ul#hero-status-options li").first().click();

    cy.get("#hero-status-display > li").contains("Master of undeath");
    cy.get("#hero-status-display > li span").contains(
      "Whenever you take a Recall Action, after you resolve it, you may: SELF, CURSE 1. If you do, activate a small based Apparition of your choice. You control its turn during that activation (you may ignore its targeting priorities and force it to attack another Monster instead)."
    );

    cy.get("#hero-status").type("Meek");
    cy.get("ul#hero-status-options li").first().click();

    cy.get("#hero-status-display > li").contains("Meek");
    cy.get("#hero-status-display > li span").contains(
      "Whenever any Hero would drop to 0 HP or less, up to one other Hero may make a Wisdom (blue) Skill Challenge of Difficulty 15. Each Wisdom cube they have gives them a +2 bonus to their roll. If they succeed, they redirect the damage that would knock out that Hero to themselves (this damage can't be prevented or reacted to)."
    );
  });
});
