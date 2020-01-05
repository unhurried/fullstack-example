/* eslint no-underscore-dangle: "off" */
export default class TodoItem {
  private _title: string;
  private _category: string;
  private _content: string;

  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
  get category(): string {
    return this._category;
  }
  set category(category: string) {
    this._category = category;
  }
  get content(): string {
    return this._content;
  }
  set content(content: string) {
    this._content = content;
  }

  constructor(title: string, category: string, content: string) {
    this._title = title;
    this._category = category;
    this._content = content;
  }
}
