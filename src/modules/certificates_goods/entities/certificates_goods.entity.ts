import {Column, Entity, PrimaryColumn} from "typeorm"; 

@Entity("constancia_bienes", { schema: "sae_nsbdb" }) 
export class certificatesGoodsEntity { 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_constancia' 
}) 
certificateId: number; 

 @Column({ 
type: 'numeric',
name: 'id_bien' 
}) 
goodId: number; 

 @Column({ 
type: 'numeric',
name: 'cantidad' 
}) 
quantity: number; 

 @Column({ 
type: 'character varying',
name: 'usuario_creacion', 
length: 100 
}) 
userCreation: string; 

 @Column({ 
type: 'character varying',
name: 'usuario_modificacion', 
length: 100 
}) 
userModification: string; 

 @Column({ 
type: 'timestamp without time zone',
name: 'fecha_creacion' 
}) 
creationDate: Date ; 

 @Column({ 
type: 'timestamp without time zone',
name: 'fecha_modificacion' 
}) 
modificationDate: Date ; 

 @Column({ 
type: 'numeric',
name: 'version' 
}) 
version: number; 

 @Column({ 
type: 'numeric',
name: 'transaction_id' 
}) 
transactionId: number; 

 @Column({ 
type: 'numeric',
name: 'no_bien_siab' 
}) 
siabGoodNum: number; 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_prog_entrega_bienes' 
}) 
goodsDeliveryScheduleId: number; 
}