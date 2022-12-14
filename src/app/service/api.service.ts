import { Injectable } from "@angular/core";
import { ICountrymodel } from "../../app/service/country.model";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService{
        $URL:string ="https://restcountries.com/v2"
        
        

        constructor(private http:HttpClient){}

        getCountrys():Observable<ICountrymodel[]>{
            let dir =`${this.$URL}/all`
            return this.http.get<any>(dir)
            .pipe(
                catchError(this.handleError)
            );
        }



        getCountryByRegion(region:string):Observable<ICountrymodel[]>{
            let dir =`${this.$URL}/region/${region}`
            return this.http.get<any>(dir)
            .pipe(
                catchError(this.handleError)
            );

        }


        getCountrysByName(nameCountry:string):Observable<ICountrymodel[]>{
            let dir =`${this.$URL}/name/${nameCountry}`
            return this.http.get<any>(dir)
            .pipe(
                catchError(this.handleError)
            );
        }

        /* return a single country */
        getCountryByName(nameCountry:string):Observable<ICountrymodel>{
            let dir =`${this.$URL}/name/${nameCountry}`
            return this.http.get<any>(dir)
            .pipe(
                catchError(this.handleError)
            );
            
        }

        private handleError(error: HttpErrorResponse){
  
            return throwError(error.message);
          }

    
        getByCode(code:string[]):Observable<ICountrymodel[]>{
            let dir=`${this.$URL}/alpha?codes=${code}`
            return this.http.get<any>(dir)
            .pipe(
                catchError(this.handleError)
            );
        }
  }