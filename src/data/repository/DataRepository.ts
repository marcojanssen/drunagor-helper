export interface DataRepository {
  find(id: string): Object | undefined;
  findAll(): Object[];
}
