import {Column, PrimaryColumn, Entity} from "typeorm"; 

@Entity("comer_oficios_det_nsbddb", { schema: "sae_nsbdb" }) 
export class commerceOfficesDetNsbddbEntity { 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_oficio' 
}) 
officeID: number; 

@PrimaryColumn({ 
type: 'numeric',
name: 'no_bien' 
}) 
goodNum: number; 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_programacion' 
}) 
programmingId: number; 

 @Column({ 
type: 'numeric',
name: 'respondido' 
}) 
answered: number; 

 @Column({ 
type: 'numeric',
name: 'id_oficio_respuesta' 
}) 
answeredOfficeID: number; 
}