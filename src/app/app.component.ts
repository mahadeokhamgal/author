import { Component } from '@angular/core';
import * as $ from 'jquery';
// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    $('button').click(function() {
      console.log('jquery is being executed');
      
        alert('GeeksForGeeks');
    });
  }
  title = 'author';
}
