import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

export interface TableData {
  headerRow: string[];
  dataRows: string[][];
}
export interface TableData1 {
  headerRow: string[];
}
@Component({
  selector: 'md-table',
  templateUrl: './md-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTableComponent {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public cardClass: string;

  @Input()
  public data: TableData;

  constructor() { }
}
