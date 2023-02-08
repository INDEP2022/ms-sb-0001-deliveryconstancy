import {Column, PrimaryColumn, PrimaryGeneratedColumn, ViewEntity} from "typeorm"; 

@ViewEntity("comer_ofi_env_avaluos_nsbddb", { schema: "sae_nsbdb" }) 
export class comerOfiEnvValueNsbddbEntity { 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_oficio' 
}) 
officeID: number; 

 @Column({ 
type: 'numeric',
name: 'id_programacion' 
}) 
programmingId: number; 

 @Column({ 
type: 'character varying',
name: 'usr_envio', 
length: 60 
}) 
sendingUsr: string; 

 @Column({ 
type: 'date',
name: 'fecha_envia' 
}) 
sendingDate: Date; 

 @Column({ 
type: 'character varying',
name: 'estatus_of', 
length: 30 
}) 
statusOf: string; 
}