describe("export campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can import campaign", () => {
      cy.get("#campaign-import").click();
      cy.get("#campaign-import-modal #campaign-token").type(
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJoZXJvZXMiOlt7Imhlcm9JZCI6ImJhcmFrIiwiY2FtcGFpZ25JZCI6IiIsImF1cmFJZCI6ImRpc2RhaW5lZCIsIm91dGNvbWVJZHMiOlsiY29ycnVwdGVkLWhlcm8iXSwic3RhdHVzSWRzIjpbImFnZ3Jlc3NpdmUtYXBwcm9hY2giLCJib29rd29ybSJdLCJzdGFzaGVkQ2FyZElkcyI6W10sInNraWxsSWRzIjpbXX0seyJoZXJvSWQiOiJkcmFzZWsiLCJjYW1wYWlnbklkIjoiIiwiYXVyYUlkIjpudWxsLCJvdXRjb21lSWRzIjpbXSwic3RhdHVzSWRzIjpbXSwic3Rhc2hlZENhcmRJZHMiOltdLCJza2lsbElkcyI6W119LHsiaGVyb0lkIjoiZHVuY2FuIiwiY2FtcGFpZ25JZCI6IiIsImF1cmFJZCI6bnVsbCwib3V0Y29tZUlkcyI6W10sInN0YXR1c0lkcyI6W10sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOltdfV19"
      );
      cy.get("#campaign-import-modal #import-button").click();

      cy.get("#heroes").contains("Barak");
      cy.get(".hero-detail-btn").first().click();
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "");
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "");
    });
});
