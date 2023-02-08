import {Column, Entity, PrimaryColumn} from "typeorm"; 

@Entity("constancias_entrega", { schema: "sae_nsbdb" }) 
export class certificatesDeliveryEntity { 

@PrimaryColumn({ 
type: 'numeric',
name: 'id_constancia' 
}) 
certificateId: number; 

 @Column({ 
type: 'numeric',
name: 'id_prog_entrega' 
}) 
deliveryScheduleId: number; 

 @Column({ 
type: 'numeric',
name: 'tipo_constancia' 
}) 
certificateType: number; 

 @Column({ 
type: 'numeric',
name: 'iden_cliente' 
}) 
clientIden: number; 

 @Column({ 
type: 'character varying',
name: 'num_iden_cliente', 
length: 50 
}) 
clientIdennNum: string; 

 @Column({ 
type: 'character varying',
name: 'proc_iden_cliente', 
length: 100 
}) 
procClientIdennNum: string; 

 @Column({ 
type: 'character varying',
name: 'rep_legal', 
length: 100 
}) 
repLegal: string; 

 @Column({ 
type: 'numeric',
name: 'iden_rep_legal' 
}) 
repLegalIden: number; 

 @Column({ 
type: 'character varying',
name: 'num_iden_rep_legal', 
length: 50 
}) 
repLegalIdenNum: string; 

 @Column({ 
type: 'character varying',
name: 'prog_iden_rep_legal', 
length: 100 
}) 
repLegalIdenProg: string; 

 @Column({ 
type: 'character varying',
name: 'puesto_rep_legal', 
length: 20 
}) 
repLegalPosition: string; 

 @Column({ 
type: 'character varying',
name: 'virtud', 
length: 500 
}) 
virtue: string; 

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
type: 'date',
name: 'fecha_creacion' 
}) 
creationDate: Date; 

 @Column({ 
type: 'date',
name: 'fecha_modificacion' 
}) 
modificationDate: Date; 

 @Column({ 
type: 'character varying',
name: 'cerrada', 
length: 1 
}) 
closing: string; 

 @Column({ 
type: 'character varying',
name: 'cargo_designacion', 
length: 100 
}) 
positionDesignation: string; 

 @Column({ 
type: 'character varying',
name: 'cargo_donatario', 
length: 100 
}) 
positionGrantee: string; 

 @Column({ 
type: 'character varying',
name: 'color', 
length: 50 
}) 
color: string; 

 @Column({ 
type: 'character varying',
name: 'desc_transporte', 
length: 100 
}) 
descTransport: string; 

 @Column({ 
type: 'date',
name: 'fecha_escritura' 
}) 
writedate: Date; 

 @Column({ 
type: 'character varying',
name: 'folio_bascula', 
length: 100 
}) 
folioScale: string; 

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
name: 'nombre_conductor', 
length: 100 
}) 
driverName: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_designatario', 
length: 100 
}) 
designeeName: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_donatario', 
length: 100 
}) 
granteeName: string; 

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
name: 'peso_recibido', 
length: 100 
}) 
receivedWeight: string; 

 @Column({ 
type: 'character varying',
name: 'peso_total_bascula', 
length: 100 
}) 
scaleTotalWeight: string; 

 @Column({ 
type: 'character varying',
name: 'placas', 
length: 50 
}) 
plates: string; 

 @Column({ 
type: 'character varying',
name: 'recibe_donacion', 
length: 100 
}) 
receiveDonation: string; 

 @Column({ 
type: 'character varying',
name: 'serie', 
length: 100 
}) 
serie: string; 

 @Column({ 
type: 'character varying',
name: 'transporte', 
length: 100 
}) 
transport: string; 

 @Column({ 
type: 'numeric',
name: 'version' 
}) 
version: number; 

 @Column({ 
type: 'character varying',
name: 'notaria_publica', 
length: 100 
}) 
publicNotary: string; 

 @Column({ 
type: 'character varying',
name: 'escritura_publica', 
length: 100 
}) 
publicDeed: string; 

 @Column({ 
type: 'numeric',
name: 'cve_estado' 
}) 
cveState: number; 

 @Column({ 
type: 'character varying',
name: 'licenciado', 
length: 100 
}) 
adjudicator: string; 

 @Column({ 
type: 'character varying',
name: 'tipo_receptor', 
length: 20 
}) 
receiverType: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_entrega', 
length: 100 
}) 
deliveryName: string; 

 @Column({ 
type: 'character varying',
name: 'puesto_entrega', 
length: 100 
}) 
postDelivery: string; 

 @Column({ 
type: 'numeric',
name: 'iden_entrega' 
}) 
deliveryIden: number; 

 @Column({ 
type: 'character varying',
name: 'num_entrega', 
length: 100 
}) 
deliveryNum: string; 

 @Column({ 
type: 'character varying',
name: 'proc_iden_entrega', 
length: 100 
}) 
deliveryProcIden: string; 

 @Column({ 
type: 'date',
name: 'fecha_oficio' 
}) 
oficioDate: Date; 

 @Column({ 
type: 'character varying',
name: 'folio', 
length: 50 
}) 
folio: string; 

 @Column({ 
type: 'character varying',
name: 'autoriza_recibir', 
length: 1 
}) 
authorizeReceive: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_te', 
length: 100 
}) 
teName: string; 

 @Column({ 
type: 'character varying',
name: 'puesto_te', 
length: 20 
}) 
tePosition: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_empresa', 
length: 100 
}) 
companyName: string; 

 @Column({ 
type: 'character varying',
name: 'acredita_personalidad', 
length: 100 
}) 
certifiesPersonality: string; 

 @Column({ 
type: 'character varying',
name: 'no_oficio', 
length: 100 
}) 
oficioNum: string; 

 @Column({ 
type: 'character varying',
name: 'puesto_empresa', 
length: 100 
}) 
positionCompany: string; 

 @Column({ 
type: 'character varying',
name: 'participa_oic', 
length: 1 
}) 
oicParticipates: string; 

 @Column({ 
type: 'character varying',
name: 'nombre_oic', 
length: 100 
}) 
oicName: string; 

 @Column({ 
type: 'character varying',
name: 'participa_comicionado', 
length: 1 
}) 
participateCommissioned: string; 

 @Column({ 
type: 'numeric',
name: 'motivos_no_aceptados' 
}) 
reasonsNotAccepted: number; 

 @Column({ 
type: 'numeric',
name: 'motivos_no_entregados' 
}) 
reasonsNotDelivered: number; 

 @Column({ 
type: 'numeric',
name: 'motivos_no_retirados' 
}) 
reasonsNotRetired: number; 

 @Column({ 
type: 'character varying',
name: 'convocatoria_oic', 
length: 50 
}) 
oicCall: string; 
}