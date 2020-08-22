import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatBadgeModule, MatButtonModule, MatCardModule, MatIconModule],
})
export class MaterialModule {}
