import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'cfp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() menus;
  @Input() user;
  selectedRoute;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.selectedRoute = this.menus.length > 0? this.menus[0].route: null;
  }

  isSelected(routeUrl) {
    return this.selectedRoute === routeUrl;
  }

  onRouteSelection(routeUrl) {
    this.selectedRoute = routeUrl;
    // Navigate with relative link
    this.router.navigate([routeUrl], { relativeTo: this.route });
  }

}
