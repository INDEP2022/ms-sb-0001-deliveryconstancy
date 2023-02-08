import {Column, PrimaryColumn, Entity} from "typeorm"; 

@Entity("constancias_donacion", { schema: "sae_nsbdb" }) 
export class certificatesDonationEntity { 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_constancia' 
}) 
certificateId: number; 

@Column({ 
type: 'numeric',
name: 'id_prog_entrega' 
}) 
progDeliveryId: number; 

 @Column({ 
type: 'character varying',
name: 'usuario_creacion', 
length: 100 
}) 
creationUser: string; 

 @Column({ 
type: 'character varying',
name: 'usuario_modificacion', 
length: 100 
}) 
userModification: string; 

 @Column({ 
type: 'date',
name: 'fecha_creacion' 
}) 
CreationDate: Date; 

 @Column({ 
type: 'date',
name: 'fecha_modificacion' 
}) 
dateModification: Date; 

 @Column({ 
type: 'character varying',
name: 'nombre_testigo_1', 
length: 100 
}) 
witnessName1: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_testigo_2', 
length: 100 
}) 
witnessName2: string; 

 @Column({ 
type: 'character varying',
name: 'transporte', 
length: 100 
}) 
transport: string; 

 @Column({ 
type: 'character varying',
name: 'marca', 
length: 100 
}) 
marck: string; 

 @Column({ 
type: 'character varying',
name: 'modelo', 
length: 100 
}) 
model: string; 

 @Column({ 
type: 'character varying',
name: 'color', 
length: 50 
}) 
color: string; 

 @Column({ 
type: 'character varying',
name: 'serie', 
length: 100 
}) 
serie: string; 

 @Column({ 
type: 'character varying',
name: 'placas', 
length: 50 
}) 
plates: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_conductor', 
length: 100 
}) 
driverName: string; 

 @Column({ 
type: 'character varying',
name: 'folio_bascula', 
length: 100 
}) 
folioScale: string; 

 @Column({ 
type: 'numeric',
name: 'peso_total_bascula' 
}) 
scaleTotalWeight: number; 

 @Column({ 
type: 'numeric',
name: 'peso_recibido' 
}) 
receivedWeight: number; 

 @Column({ 
type: 'character varying',
name: 'nombre_donatario', 
length: 100 
}) 
granteeName: string; 

 @Column({ 
type: 'character varying',
name: 'cargo_donatario', 
length: 100 
}) 
granteePosition: string; 

 @Column({ 
type: 'character varying',
name: 'desc_transporte', 
length: 100 
}) 
descTransport: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_designacion', 
length: 100 
}) 
designationName: string; 

 @Column({ 
type: 'character varying',
name: 'cargo_designacion', 
length: 100 
}) 
positionDesignation: string; 

 @Column({ 
type: 'character varying',
name: 'recibe_donacion', 
length: 100 
}) 
receiveDonation: string; 
}