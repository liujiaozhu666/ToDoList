import { Component, OnInit } from '@angular/core';
import {  StorageService } from '../../services/storage.service';
import {letProto} from 'rxjs/operator/let';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public username: any = '';
  public list = [];
  constructor(private storage: StorageService) {

  }
  ngOnInit () {
    let todolist = this.storage.getItem('todolist');
    if (todolist) {
      this.list = todolist;
    }
  }
  addData(e) {
    if (e.keyCode === 13) {
      let userInfo = {
        username : this.username,
        status : false
      };
      this.list.push(userInfo);
      this.storage.setItem('todolist', this.list);
      this.username = '';
    }
  }
  deleteData(key) {
    this.list.splice(key, 1);
    this.storage.setItem('todolist', this.list);
  }
  abc(key, boolean) {
    this.list[key].status = boolean;
    this.storage.setItem('todolist', this.list);
  }
}
