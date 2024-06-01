import type { Status } from "@/data/repository/campaign/Status";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import * as _ from "lodash-es";
import { useI18n } from "vue-i18n";

export class StoryRecordStatusRepository implements StatusRepository {
  private status: Status[] = [];

  public find(statusId: string): Status | undefined {
    return _.find(this.status, { id: statusId });
  }

  public findAll(): Status[] {
    return this.status;
  }

  public load(locale: string) {
    const i18n = useI18n();
    const statusList: any = i18n.messages.value[locale].statuses;
    this.status = statusList["awakenings"].storyrecord as Status[];
    this.status = _.sortBy(this.status, ["name"]);
  }
}
