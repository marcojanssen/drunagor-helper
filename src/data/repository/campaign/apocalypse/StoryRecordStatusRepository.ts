import type { Status } from "@/data/repository/campaign/Status";
import type { StatusRepository } from "@/data/repository/campaign/StatusRepository";
import * as _ from "lodash-es";
import { useI18n } from "vue-i18n";

export class StoryRecordStatusRepository implements StatusRepository {
  private statuses: Status[] = [];

  public find(statusId: string): Status | undefined {
    return _.find(this.statuses, { id: statusId });
  }

  public findAll(): Status[] {
    return this.statuses;
  }

  public load(locale: string) {
    const i18n = useI18n();
    const statusList: any = i18n.messages.value[locale].statuses;
    this.statuses = statusList["apocalypse"].storyrecord as Status[];
    this.statuses = _.sortBy(this.statuses, ["name"]);
  }
}
