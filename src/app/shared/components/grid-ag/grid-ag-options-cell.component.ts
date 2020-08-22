import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { Router } from "@angular/router";
import { TireService } from 'src/app/core/services/tire.service';

@Component({
  selector: "options-cell",
  template: `
    <div class="optionsCell">
      <span
        class="icon has-text-danger option"
        title="Eliminar"
        (click)="delete()"
      >
        <i class="fas fa-trash"></i>
      </span>
      <span class="icon option" title="Editar" (click)="edit()">
        <i class="fas fa-edit"></i>
      </span>
    </div>
  `,
  styleUrls: ["./grid-ag.component.scss"]
})
export class GridAgOptionsCellComponent implements ICellRendererAngularComp {
  public params: any;
  public iconAlias: string;
  public data: any;

  constructor(private readonly _router: Router, private readonly _tireService: TireService) {}

  // called on init
  agInit(params: any): void {
    this.params = params;
    this.data = this.params.data
    // console.log(params);
    
    // if (params.posibleValues) {
    //   const posibleValue = params.posibleValues.find(
    //     posibleValue => posibleValue.whenValueIs === params.value
    //   );
    //   if (posibleValue) {
    //     this.params.value = posibleValue.itShouldBe;
    //     this.iconAlias = posibleValue.iconAlias;
    //   }
    // }
  }

  // called when the cell is refreshed
  refresh(): boolean {
    return false;
  }

  /**
   * delete
   */
  public delete() {
    const isDelete = confirm(`Seguro que desea eliminar el neumatico "${this.data.description}"?`);
    // console.log(isDelete)
    if(isDelete){

      // console.log(this.data)

      // this._tireService.delete(this.data._id).subscribe(res => {
        // //console.log(res);


      //   this.params.api.updateRowData({remove: [this.params.data]})
      // })
    }
  }

  /**
   * edit
   */
  public edit() {
    this._router.navigate(['/admin', 'tire', 'update', this.data._id])
  }
}
