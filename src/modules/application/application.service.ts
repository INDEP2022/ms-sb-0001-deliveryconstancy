import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { QueryGoodTrackerDto } from './dto/query-good-tracker.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { QueryApplicationDto } from './dto/query-application.dto';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectEntityManager() private readonly entity: EntityManager,
        @Inject('ms-sb-0001-donationgood') private readonly proxyDonationgood: ClientProxy,
    ) {
        this.proxyDonationgood.connect();
    }

    async queryGoodTracker(dto: QueryGoodTrackerDto) {

        const { relGood, typeMinutes, vcScreen } = dto

        const vc_pantalla: string = vcScreen ? vcScreen : null
        const BLK_ACT_ID_TIPO_ACTA: string = typeMinutes ? typeMinutes : null
        const global_rel_bienes: number = relGood ? +relGood : null

        let pl_id: number = null
        let pl_name: string = 'Params_forma'
        let sqlstr: string = null
        let nIgn: number = null
        let LST_MENSAJE: string = null
        let lnu_max_partida: number = null
        let v_condicion: string = 'NO_BIEN IN ('
        let v_ban: boolean = true
        let v_ind_proc: boolean = null
        let v_con: number = null
        let V_TIPO_ACTA: string = null
        let LS_SQLSTR: string = null
        let LST_COL1: string = null
        let lv_identif: string = null
        let v_est_disp: string = null
        let V_EAC: string = null
        let V_BP: string = null

        const resData = []

        try {

            const CURSOR_CUR_BIEN_RAST = async (vu_rel_bienes: number = null) => {
                return this.entity.query(
                    `select
                        NO_BIEN,
                        B.DESCRIPCION,
                        ESTATUS,
                        CANTIDAD,
                        PROCESO_EXT_DOM,
                        B.NO_CLASIF_BIEN,
                        NO_BOVEDA,
                        NO_ALMACEN,
                        NO_TIPO,
                        NO_SUBTIPO
                    from
                        sera.bien B,
                        sera.CAT_SSSUBTIPO_BIEN CB
                    where
                        B.NO_CLASIF_BIEN = CB.NO_CLASIF_BIEN
                        and NO_BIEN in(
                        select
                            NO_BIEN
                        from
                            sera.TMP_RASTREADOR X
                        where
                            IDENTIFICADOR = ${vu_rel_bienes})`
                )
            }
            // pl_id := Get_Parameter_List(pl_name)
            //     IF Id_Null(pl_id) THEN
            //     pl_id := Create_Parameter_List(pl_name);
            //     IF Id_Null(pl_id) THEN
            //          LIP_MENSAJE('Error al crear lista de parámetros. '||pl_name,'N');
            //          RAISE Form_Trigger_Failure;
            //     END IF;
            //   ELSE
            //       Destroy_Parameter_List(pl_id);
            //       pl_id := Create_Parameter_List(pl_name);
            //   END IF;
            //       pl_id := Get_Parameter_List(pl_name);
            //       IF NOT Id_Null(pl_id) THEN
            //          Add_Parameter(pl_id,'PAR_MASIVO',TEXT_PARAMETER,'S');
            //       END IF;
            // global_rel_bienes = 0
            // CALL_FORM('FCONGENRASTREADOR',HIDE,NO_REPLACE,NO_QUERY_ONLY,pl_id);
            // SYNCHRONIZE;
            // SET_WINDOW_PROPERTY('WIN_INICIAL',WINDOW_STATE,MAXIMIZE);
            if (global_rel_bienes !== 0) {
                // SET_APPLICATION_PROPERTY(CURSOR_STYLE,'BUSY');
                // SET_BLOCK_PROPERTY('BLK_DET',INSERT_ALLOWED,PROPERTY_TRUE);
                // GO_BLOCK('BLK_BIE');
                v_con = 0
                const CUR_BIEN_RAST = await CURSOR_CUR_BIEN_RAST(global_rel_bienes)
                for (const RE_BIEN_RAST of CUR_BIEN_RAST) {
                    const NO_BIEN: number = RE_BIEN_RAST.no_bien ? +RE_BIEN_RAST.no_bien : null
                    const DESCRIPCION: string = RE_BIEN_RAST.descripcion ? RE_BIEN_RAST.descripcion : null
                    const ESTATUS: string = RE_BIEN_RAST.estatus ? RE_BIEN_RAST.estatus : null
                    const CANTIDAD: number = RE_BIEN_RAST.cantidad ? +RE_BIEN_RAST.cantidad : null
                    const PROCESO_EXT_DOM: string = RE_BIEN_RAST.proceso_ext_dom ? RE_BIEN_RAST.proceso_ext_dom : null
                    const NO_CLASIF_BIEN: number = RE_BIEN_RAST.no_clasif_bien ? +RE_BIEN_RAST.no_clasif_bien : null
                    const NO_BOVEDA: number = RE_BIEN_RAST.no_boveda ? +RE_BIEN_RAST.no_boveda : null
                    const NO_ALMACEN: number = RE_BIEN_RAST.no_almacen ? +RE_BIEN_RAST.no_almacen : null
                    const NO_TIPO: number = RE_BIEN_RAST.no_tipo ? +RE_BIEN_RAST.no_tipo : null
                    const NO_SUBTIPO: number = RE_BIEN_RAST.no_subtipo ? +RE_BIEN_RAST.no_subtipo : null
                    // GO_BLOCK('BLK_DET');
                    // FIRST_RECORD;
                    // LOOP
                    if (BLK_ACT_ID_TIPO_ACTA === 'E/VEN') {
                        lv_identif = 'COM'
                    } else if (BLK_ACT_ID_TIPO_ACTA === 'E/DON') {
                        lv_identif = 'DON'
                    } else if (BLK_ACT_ID_TIPO_ACTA === 'E/DES') {
                        lv_identif = 'DES'
                    } else if (BLK_ACT_ID_TIPO_ACTA === 'E/DEV') {
                        lv_identif = 'DEV'
                    } else if (BLK_ACT_ID_TIPO_ACTA === 'E/RES') {
                        lv_identif = 'ASI'
                    }
                    // DECLARE
                    // vc_pantalla VARCHAR2(100) := GET_APPLICATION_PROPERTY(CURRENT_FORM_NAME);
                    const consulta1 = await this.entity.query(
                        `select
                            'S' as eac
                        from
                            sera.ESTATUS_X_PANTALLA EST
                        where
                            EST.ACCION = 'CONSENTR'
                            and EST.CVE_PANTALLA = ${vc_pantalla ? `'${vc_pantalla}'` : null}
                            and EST.IDENTIFICADOR = ${lv_identif ? `'${lv_identif}'` : null}
                            and EST.ESTATUS = ${ESTATUS ? `'${ESTATUS}'` : null}
                            and EST.PROCESO_EXT_DOM = ${PROCESO_EXT_DOM ? `'${PROCESO_EXT_DOM}'` : null}
                            and est.TIPO_DICTAMINACION is null`
                    )
                    if (consulta1.length > 0) {
                        V_EAC = consulta1[0].eac ? consulta1[0].eac : null
                    } else {
                        V_EAC = 'N'
                    }
                    const consulta2 = await this.entity.query(
                        `SELECT
                            'S' as bp
                        FROM
                            sera.detalle_acta_ent_recep
                        WHERE
                            no_bien = ${NO_BIEN}
                            AND no_acta IN (
                                SELECT
                                    no_acta
                                FROM
                                    sera.actas_entrega_recepcion
                            )
                            AND DATE_TRUNC('day', FEC_APROBACION_X_ADMON) 
                                BETWEEN TO_DATE('01' || TO_CHAR(CURRENT_DATE, 'MMYYYY'), 'DDMMYYYY') 
                                AND (DATE_TRUNC('MONTH', CURRENT_DATE) + INTERVAL '1 MONTH' - INTERVAL '1 day')`
                    )
                    if (consulta2.length > 0) {
                        V_BP = consulta2[0].bp ? consulta2[0].bp : null
                    } else {
                        V_BP = 'N'
                    }

                    let blk_det_di_desc_bien: string = null
                    const consulta3 = await this.entity.query(
                        `select
                            descripcion as blk_det_di_desc_bien
                        from
                            sera.bien
                        where
                            no_bien = ${NO_BIEN}`
                    )
                    if (consulta3.length > 0) {
                        blk_det_di_desc_bien = consulta3[0].blk_det_di_desc_bien ? consulta3[0].blk_det_di_desc_bien : null
                    }

                    let blk_det_di_estatus_bien: string = null
                    const consulta4 = await this.entity.query(
                        `select
                            descripcion as blk_det_di_estatus_bien
                        from
                            sera.estatus_bien
                        where
                            estatus = ${ESTATUS}`
                    )
                    if (consulta4.length > 0) {
                        blk_det_di_estatus_bien = consulta4[0].blk_det_di_estatus_bien ? consulta4[0].blk_det_di_estatus_bien : null
                    }

                    resData.push({
                        v_easc: V_EAC,
                        v_bp: V_BP,
                        goodNumber: NO_BIEN,
                        status: ESTATUS,
                        amount: CANTIDAD,
                        processExtDom: PROCESO_EXT_DOM,
                        classificationNumber: NO_CLASIF_BIEN,
                        vaultNumber: NO_BOVEDA,
                        storeNumber: NO_ALMACEN,
                        type: NO_TIPO,
                        subtype: NO_SUBTIPO,
                        diDescGood: blk_det_di_desc_bien,
                        diStatusGood: blk_det_di_estatus_bien
                    })
                }
            }

            return {
                statusCode: HttpStatus.OK,
                message: 'OK',
                data: resData
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
                data: [],
            };
        }
    }

    async queryApplication(dto: QueryApplicationDto) {

        const { applicationId, formKey, minutesNumber, typeApplication, user } = dto

        const USER: string = user ? user : null
        const DONAC_SOLICITUD_ID_SOLICITUD: number = applicationId ? applicationId : null

        const BLK_TOOLBAR_CVE_FORMA: string = formKey ? formKey : null
        const DONAC_SOLICITUD_TIPO_SOLICITUD: number = typeApplication ? typeApplication : null
        const BLK_ACT_NO_ACTA: number = minutesNumber ? minutesNumber : null

        let lv_TOTREG: number = null
        let lv_VALSOL: number = null
        let lv_BIEPAR: number = null
        let lv_NOBIEN: number = null
        let lv_NOACTA: number = null
        let lv_CANTIDAD: number = null

        let validaciones = null

        try {

            const CURSOR_C_DATCTA = async () => {
                return this.entity.query(
                    `select
                        count(0) as count
                    from
                        sera.TMP_BIEN_AUT_DONACION
                    where
                        USUARIO_REG = ${USER ? `'${USER}'` : null}`
                )
            }

            const CURSOR_C_VALSOL = async () => {
                return this.entity.query(
                    `select
                        count(0) as count
                    from
                        sera.DONAC_SOLICITUD_BIEN
                    where
                        ID_SOLICITUD = ${DONAC_SOLICITUD_ID_SOLICITUD}`
                )
            }

            const CURSOR_C_BIEPAR = async () => {
                return this.entity.query(
                    `select
                        COUNT(0) as count
                    from
                        sera.TMP_BIEN_AUT_DONACION
                    where
                        USUARIO_REG = user
                        and VAL_PARCIAL = 1
                        and ID_SOLICITUD = ${DONAC_SOLICITUD_ID_SOLICITUD}`
                )
            }

            const CURSOR_C_PARBIE = async () => {
                return this.entity.query(
                    `select
                        NO_BIEN,
                        CANTIDAD,
                        NO_ACTA
                    from
                        sera.TMP_BIEN_AUT_DONACION
                    where
                        USUARIO_REG = ${USER ? `'${USER}'` : null}
                        and VAL_PARCIAL = 1
                        and ID_SOLICITUD = ${DONAC_SOLICITUD_ID_SOLICITUD}`
                )
            }

            const C_DATCTA = await CURSOR_C_DATCTA()
            C_DATCTA.forEach(element => {
                lv_TOTREG = element.count ? +element.count : null
            });

            if (DONAC_SOLICITUD_ID_SOLICITUD === null) {
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Debe elegir un número de solicitud para generar constancias',
                    data: false
                };
            }
            if (lv_TOTREG === 0) {
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'No se puede generar constancias de entrega por que no hay bienes',
                    data: false
                };
            } else {
                // if LIF_MENSAJE_SI_NO('¿Se generaran constancias de entrega, si se parcializó algún bien se genera el proceso, desea continuar?') = 'S' then
                // SET_APPLICATION_PROPERTY(CURSOR_STYLE,'BUSY');
                const C_VALSOL = await CURSOR_C_VALSOL()
                C_VALSOL.forEach(element => {
                    lv_VALSOL = element.count ? +element.count : null
                });
                if (lv_VALSOL === 0) {
                    return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: `Las constancias para la solicitud ${DONAC_SOLICITUD_ID_SOLICITUD} fuerón generadas`,
                        data: false
                    };
                } else {
                    const C_BIEPAR = await CURSOR_C_BIEPAR()
                    C_BIEPAR.forEach(element => {
                        lv_BIEPAR = element.count ? +element.count : null
                    });
                    if (lv_BIEPAR > 0) {
                        const C_PARBIE = await CURSOR_C_PARBIE()
                        C_PARBIE.forEach(element => {
                            lv_NOBIEN = element.no_bien ? +element.no_bien : null
                            lv_CANTIDAD = element.cantidad ? +element.cantidad : null
                            lv_NOACTA = element.no_acta ? +element.no_acta : null
                        });
                        validaciones = await lastValueFrom(
                            this.proxyDonationgood.send(
                                { cmd: 'paPartializeGoodDonate' },
                                {
                                    good: lv_NOBIEN,
                                    screen: BLK_TOOLBAR_CVE_FORMA,
                                    nvocand: lv_CANTIDAD,
                                    tipproc: 1,
                                    proceedingNumber: lv_NOACTA
                                }
                            ),
                        );
                        if (validaciones !== 200) {
                            return validaciones
                        }
                    }
                    validaciones = await lastValueFrom(
                        this.proxyDonationgood.send(
                            { cmd: 'paDonateReqGood' },
                            {
                                tipsol: DONAC_SOLICITUD_TIPO_SOLICITUD,
                                proceedingNumber: BLK_ACT_NO_ACTA,
                                screen: BLK_TOOLBAR_CVE_FORMA,
                                request: DONAC_SOLICITUD_ID_SOLICITUD
                            }
                        ),
                    );
                    if (validaciones !== 200) {
                        return validaciones
                    }
                    validaciones = await lastValueFrom(
                        this.proxyDonationgood.send(
                            { cmd: 'insGoodDonate' },
                            {
                                goodId: null,
                                requestId: DONAC_SOLICITUD_TIPO_SOLICITUD,
                                partial: null,
                                amount: null,
                                balanceAmoun: null,
                                processNumber: 4
                            }
                        ),
                    );
                    if (validaciones !== 200) {
                        return validaciones
                    }
                }
            }

            return {
                statusCode: HttpStatus.OK,
                message: 'OK',
                data: true
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
                data: [],
            };
        }
    }
}
