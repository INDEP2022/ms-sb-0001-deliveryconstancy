import { Column, ViewEntity } from "typeorm";

@ViewEntity("constancia_devolucion_view", { schema: "sae_nsbdb" })
export class DevolutionConstancyViewEntity {

      @Column({
            type: "numeric",
            name: "id_constancia"
      })
      certificateId: number;

      @Column({
            type: "character varying",
            name: "tipo"
      })
      type: string;

      @Column({
            type: "numeric",
            name: "folio"
      })
      folio: number;

      @Column({
            type: "character varying",
            name: "del_regional"
      })
      regional: string;

      @Column({
            type: "text",
            name: "ciudad"
      })
      city: string;

      @Column({
            type: "text",
            name: "estado"
      })
      state: string;

      @Column({
            type: "text",
            name: "horas"
      })
      hours: string;

      @Column({
            type: "text",
            name: "dia"
      })
      day: string;

      @Column({
            type: "text",
            name: "mes"
      })
      month: string;

      @Column({
            type: "text",
            name: "anio"
      })
      year: string;

      @Column({
            type: "text",
            name: "direccion"
      })
      address: string;

      @Column({
            type: "character varying",
            name: "nombre_te"
      })
      teName: string;

      @Column({
            type: "character varying",
            name: "puesto_te"
      })
      tePosition: string;

      @Column({
            type: "character varying",
            name: "iden_te"
      })
      teIdentity: string;

      @Column({
            type: "numeric",
            name: "num__te"
      })
      teNumber: number;

      @Column({
            type: "character varying",
            name: "proc_te"
      })
      teProcess: string;

      @Column({
            type: "character varying",
            name: "nombre_sae"
      })
      saeName: string;

      @Column({
            type: "character varying",
            name: "puesto_sae"
      })
      saePosition: string;

      @Column({
            type: "character varying",
            name: "iden_sae"
      })
      saeIdentity: string;

      @Column({
            type: "character varying",
            name: "proc_sae"
      })
      saeProcess: string;

      @Column({
            type: "numeric",
            name: "num_sae"
      })
      saeNumber: number;

      @Column({
            type: "character varying",
            name: "oficio"
      })
      office: string;

      @Column({
            type: "text",
            name: "dia_oficio"
      })
      officeDay: string;

      @Column({
            type: "text",
            name: "mes_oficio"
      })
      officeMonth: string;

      @Column({
            type: "text",
            name: "anio_oficio"
      })
      officeYear: string;

      @Column({
            type: "character varying",
            name: "nomb_c"
      })
      companyName: string;

      @Column({
            type: "character varying",
            name: "puesto_c"
      })
      companyPosition: string;

      @Column({
            type: "character varying",
            name: "representante"
      })
      representative: string;

      @Column({
            type: "character varying",
            name: "puesto_rep"
      })
      representativePosition: string;

      @Column({
            type: "character varying",
            name: "iden_rep"
      })
      representativeIdentification: string;

      @Column({
            type: "character varying",
            name: "num_legal"
      })
      legalNumber: string;

      @Column({
            type: "character varying",
            name: "prog_legal"
      })
      legalProgram: string;

      @Column({
            type: "character varying",
            name: "oficio_2"
      })
      office2: string;

      @Column({
            type: "text",
            name: "dia_oficio_2"
      })
      officeDay2: string;

      @Column({
            type: "text",
            name: "mes_oficio_2"
      })
      officeMonth2: string;

      @Column({
            type: "text",
            name: "anio_oficio_2"
      })
      officeYear2: string;

      @Column({
            type: "boolean",
            name: "comisionado"
      })
      commissioned: boolean;

      @Column({
            type: "character varying",
            name: "convocatoria"
      })
      convocation: string;

      @Column({
            type: "character varying",
            name: "testigo_1"
      })
      witness1: string;

      @Column({
            type: "character varying",
            name: "testigo_2"
      })
      witness2: string;

      @Column({
            type: "character varying",
            name: "nombre_oic"
      })
      oicName: string;

      @Column({
            type: "character varying",
            name: "oic"
      })
      oic: string;

      @Column({
            type: "character varying",
            name: "virtud"
      })
      virtue: string;

      @Column({
            type: "character varying",
            name: "etiqueta_representante"
      })
      representativeLabel: string;
}