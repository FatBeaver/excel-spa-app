import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.tempalte'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return createTable()
  }
}