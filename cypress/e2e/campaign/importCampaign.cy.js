describe("export campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can import campaign", () => {
      cy.get("#campaign-import").click();
      cy.get("#campaign-import-modal #campaign-token").type(
        "eyJjYW1wYWlnbiI6eyJjYW1wYWlnbklkIjoiNzQ5MjUiLCJuYW1lIjoiIiwiY2FtcGFpZ24iOiJjb3JlIn0sImhlcm9lcyI6W3siaGVyb0lkIjoiYXJraGFub3MiLCJjYW1wYWlnbklkIjoiNzQ5MjUiLCJlcXVpcG1lbnQiOnsid2VhcG9uSWQiOiJhbWlyYW4tY3Jvc3Nib3ciLCJvZmZIYW5kSWQiOiIiLCJhcm1vcklkIjoiYnJlYXN0cGxhdGUiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOltdLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
      );
      cy.get("#campaign-import-modal #import-button").click();

      cy.get("#heroes").contains("Arkhanos");
      cy.get(".hero-detail-btn").click();
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Breastplate");
    });
});
