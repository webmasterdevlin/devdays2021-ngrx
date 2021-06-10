import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { State } from "src/app/store";
import { selectHeroStore } from "src/app/store/selectors/hero.selectors";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  totalHeroes = 0;
  totalVillains = 0;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.getStore();
  }

  private getStore() {
    this.store
      .select(selectHeroStore)
      .pipe(untilDestroyed(this))
      .subscribe(({ heroes }) => {
        this.totalHeroes = heroes.length;
      });
  }
}
