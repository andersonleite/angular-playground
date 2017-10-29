import { Header } from "./header.model";
import { Observable } from "rxjs/Observable";

export interface IHeaderService {
  getData(): Observable<Header>;
}
