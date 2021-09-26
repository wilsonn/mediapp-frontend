import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from 'src/app/_service/paciente.service';
import { Paciente } from '../../_model/paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  dataSource: MatTableDataSource<Paciente>;
  displayedColumns: string[] = ['idPaciente', 'nombres', 'apellidos', 'acciones'];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
