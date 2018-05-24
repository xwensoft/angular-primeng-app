import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];

  constructor(
    private router:Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: '跨境一点通',
        icon: 'fa-file-o',
        items: [{
          label: '订单管理',
          icon: 'fa-plus',
          items: [
            { label: '订单查询',command: (event) => {
              this.router.navigate(['workspace/ecqdorder']);
            } },
            { label: '订单导入' },
          ]
        },
        { label: 'Open', items: [
          
            { label: '订单查询' },
            { label: '订单导入' },
          
        ] },
        { separator: true },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              { label: 'Save', icon: 'fa-save' },
              { label: 'Update', icon: 'fa-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              { label: 'Delete', icon: 'fa-minus' }
            ]
          }
        ]
      },
      {
        label: 'Quit', icon: 'fa-minus'
      }
    ];
  }

  

  dologout() {
    sessionStorage.removeItem('accessToken');
    this.router.navigate(["login"]);
  }

  

}
