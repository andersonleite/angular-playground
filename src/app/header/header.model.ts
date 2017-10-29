/**
 * HeaderModel is a data-structure that holds an individual
 * record from the API
 */
export class Header {
  title: string;

  constructor(obj?: any) {
    this.title = obj && obj.title || null;
  }
}
