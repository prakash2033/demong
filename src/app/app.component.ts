import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demong';

  postDetails;
  showLoadingIndicator;

  constructor(private service: AppService){
    this.postDetails = [];
  }

  ngOnInit(){
  }

  getPostDetails(){
    this.showLoadingIndicator = true;
    this.service.getPosts().subscribe((response:[])=>{
      this.showLoadingIndicator = false;
      if(response && response.length > 1){
        this.postDetails = response;
      }
      else{
        this.postDetails = [];
      }
    });
  }
}
