import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var M: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  public activeLang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
  }

  public changeLang(lang: any) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
