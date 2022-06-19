import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myssr';
  
  currenturl: any;

  constructor(private pagetitle: Title, private metaService: Meta, private router: Router){
    this.router.events.subscribe((url:any) => {
      this.currenturl = url.url;
      if(this.currenturl){
        this.changeMeta(this.currenturl);
      }
    });
  }

  changeMeta(path: any){
    if(path == '/contact'){
      this.pagetitle.setTitle('Contact Page');
      this.metaService.addTags([
        { description: 'My Contact Page' },
        { title: 'Contact Page' },
      ])
    }else if(path == '/about'){
      this.pagetitle.setTitle('About Page');
      this.metaService.addTags([
        { description: 'My About Page' },
      ])
    }else if(path == '/'){
      this.pagetitle.setTitle('Home Page');
      this.metaService.addTags([
        { description: 'My Home Page' },
      ])
    }else{
      this.pagetitle.setTitle('SSR');
      this.metaService.addTags([
        { description: 'Not found' },
      ])
    }
  }

}
