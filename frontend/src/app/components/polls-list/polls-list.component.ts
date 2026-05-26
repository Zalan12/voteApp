import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-polls-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './polls-list.component.html',
  styleUrl: './polls-list.component.scss'
})
export class PollsListComponent implements OnInit{

  constructor(private api:ApiService){}

  polls:any=[];

  ngOnInit(): void {

    this.getPollsData()
  }

  getPollsData(){
    this.api.readAll("polls").subscribe({
      next:(res)=> this.polls=res
    
      
    })
  }

  deletePoll(id:number){

    this.api.delete("polls",id).subscribe({
      next:()=>alert("Sikeres adattörlés!"),
      error:(err)=> console.log(err)
      
    })

    setTimeout(() => {
      this.getPollsData();
    }, 500);
  }
}
