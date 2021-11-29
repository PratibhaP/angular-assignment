import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../rest.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentsComponent {

  isTableExpanded = false;
  constructor(private restService : RestService) { }
  studentData:any = []; 
  filterQuery:any = '';

  dataStudentsList:any = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'name', 'age','score', 'address', 'actions'];
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit(): void {
    this.restService.getUsers().subscribe(
      (response)=>
      {
        this.studentData = response;
        this.dataStudentsList.data = response;
      },
      (error) => console.log(error)
    )
  }

  ngAfterViewInit() {
    this.dataStudentsList.sort = this.sort;
  }

  // Toggel Rows
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataStudentsList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    })
  }

  addStudent() {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataStudentsList.filter = filterValue;
  }

}


