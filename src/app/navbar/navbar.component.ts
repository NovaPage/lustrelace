import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const part1 = document.getElementById('part1');
    const logoPart2 = document.getElementById('logo-part2');
    if (window.scrollY > 50) { // Ajusta este valor según necesites
      part1?.classList.add('hidden');
      logoPart2?.classList.add('hidden-logo');
    } else {
      part1?.classList.remove('hidden');
      logoPart2?.classList.remove('hidden-logo');
    }
  }
}
