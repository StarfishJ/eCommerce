import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FaConfig, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  imports: [RouterModule, FontAwesomeModule, NavbarComponent, FooterComponent],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
  title = 'ecom-frontend';
}
