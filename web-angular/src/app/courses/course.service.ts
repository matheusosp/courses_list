import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
    providedIn: 'root'
})
export class CourseService{

    private courseUrl: string = 'http://localhost:3100/api/courses'

    constructor(private HttpClient: HttpClient){}
    
    retrieveAll(): Observable<Course[]> {
        return this.HttpClient.get<Course[]>(this.courseUrl); 
    }

    retriveById(id: number): Observable <Course> {
        return this.HttpClient.get<Course>(` ${this.courseUrl}/${id} `);
    }

    save(course: Course):Observable<Course>{
        if (course.id){
            return this.HttpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
        }else{
            return this.HttpClient.post<Course>(`${this.courseUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.HttpClient.delete<any>(`${this.courseUrl}/${id}`);
    }

}