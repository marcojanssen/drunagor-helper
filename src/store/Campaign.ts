export class Campaign {
  public campaignId: string;
  public campaign: "core" | "apocalypse" | "awakenings";

  constructor(campaignId: string, campaign: "core" | "apocalypse" | "awakenings") {
    this.campaignId = campaignId;
    this.campaign = campaign;
  }
}
