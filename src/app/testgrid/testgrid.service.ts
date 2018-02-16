import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ITestGrid } from './testgrid';
import {  } from '..//';

@Injectable()
export class TestGridService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_TestGrid(testgrid: ITestGrid): Observable<ITestGrid>{
        return this.apiService.post(this.config.api_url+`/TestGrid_Default_Activity/TestGrid/`,testgrid);

    }
    update_TestGrid(testgrid: ITestGrid): Observable<ITestGrid>{
        return this.apiService.put(this.config.api_url+`/TestGrid_Default_Activity/TestGrid/`,testgrid);

    }
    search_for_update_TestGrid(testgrid_id: number): Observable<ITestGrid>{
        return this.apiService.get(this.config.api_url+`/TestGrid_Default_Activity/TestGrid/${testgrid_id}`);

    }
    delete_TestGrid(testgrid: ITestGrid): Observable<ITestGrid>{
        return this.apiService.delete(this.config.api_url+`/TestGrid_Default_Activity/TestGrid/${testgrid.id}`);

    }
    get_all_TestGrid(): Observable<ITestGrid[]>{
        return this.apiService.get(this.config.api_url+`/TestGrid_Default_Activity/TestGrid/`);

    }
}