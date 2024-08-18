import {HttpParams} from "@angular/common/http";

export function convertQueryParams(params:any ): any {
  let httpParams = new HttpParams();
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      httpParams = httpParams.append(key, params[key]);
    }
  }
  return httpParams;
}
