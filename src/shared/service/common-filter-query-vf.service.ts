import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import * as moment from 'moment';
import { PaginateQuery } from 'nestjs-paginate';
import { EntityManager } from 'typeorm';
import { callViewDto } from './call-view.dto';

@Injectable()
export class CommonFilterQueryVFService {

      constructor(@InjectEntityManager() private readonly entityManager: EntityManager) { }

      private contieneDosPuntos = (texto) => {
            let contador = 0;
            for (let i = 0; i < texto.length; i++) {
                  if (texto[i] === ':') {
                        contador++;
                  }
            }
            return contador === 2;
      }

      private esNumerico = (cadena) => {
            const patronNumerico = /^[0-9,]+$/;
            return patronNumerico.test(cadena);
      }

      private validarDato = (data) => {
            if (Array.isArray(data)) {
                  return false
            } else if (typeof data === 'string') {
                  return true
            }
            return true
      }
      private resultAddFilter = (endData, endTypeFilter, endColumn) => {
            let data = endData
            let typeFilter = endTypeFilter
            let column = endColumn
            const resultado = this.contieneDosPuntos(data);
            if (resultado) {
                  let ultimoIndice = data.lastIndexOf(":")
                  let newData = data.substring(0, ultimoIndice)
                  switch (newData) {
                        case '$not:$eq':
                              typeFilter = newData
                              break;
                        case '$not:$ilike':
                              typeFilter = newData
                              break;
                        case '$not:$in':
                              typeFilter = newData
                              break;
                        default:
                              typeFilter = data.match(/\$(.*):/)[1]
                              break;
                  }
            } else {
                  switch (data) {
                        case '$not:$null':
                              typeFilter = data
                              break;
                        case '$null':
                              typeFilter = data
                              break;
                        case '$in':
                              typeFilter = data.match(/\$(.*):/)[1]
                              break;
                        case '$btw':
                              typeFilter = data.match(/\$(.*):/)[1]
                              break;
                        case '$or':
                              typeFilter = data.match(/\$(.*):/)[1]
                              break;
                        default:
                              typeFilter = data.match(/\$(.*?):/)[1]
                              break;
                  }
            }
            if (resultado) {
                  const valorData = String(data).split(':')[2];
                  if (data) {
                        switch (typeFilter) {
                              case '$not:$in':
                                    const validData = this.esNumerico(valorData)
                                    if (validData) {
                                          return ` AND ${column} not in (${valorData})`
                                    } else {
                                          const cadenaOriginal = valorData
                                          const arrayElementos = cadenaOriginal.split(',')
                                          const cadenaEditada = arrayElementos.map(elemento => `'${elemento.toUpperCase()}'`).join(', ')
                                          return ` AND ${column} not in (${cadenaEditada})`
                                    }
                              case '$not:$eq':
                                    return ` AND ${column} <> '${valorData}'`;
                              case '$not:$ilike':
                                    return ` AND unaccent(LOWER(${column})) NOT LIKE '%${valorData.toLowerCase().
                                          normalize("NFD").replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
                                          .normalize()}%'`
                              default:
                                    return ''
                        }
                  }
                  return ''
            } else {
                  const valorData = data.substring(data.indexOf(':') + 1)
                  if (data) {
                        switch (typeFilter) {
                              case 'eq':
                                    return ` AND ${column} = '${valorData}'`;
                              case 'ilike':
                                    return ` AND unaccent(LOWER(${column})) LIKE '%${valorData.toLowerCase().
                                          normalize("NFD").replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
                                          .normalize()}%'`
                              case '$not:$null':
                                    return ` AND ${column} is not null`
                              case '$null':
                                    return ` AND ${column} is null`
                              case 'in':
                                    const validData = this.esNumerico(valorData)
                                    if (validData) {
                                          return ` AND ${column} in (${valorData})`
                                    } else {
                                          const cadenaOriginal = valorData
                                          const arrayElementos = cadenaOriginal.split(',')
                                          const cadenaEditada = arrayElementos.map(elemento => `'${elemento.toUpperCase()}'`).join(', ')
                                          return ` AND ${column} in (${cadenaEditada})`
                                    }
                              case 'btw':
                                    const valoresSeparadosCaso2 = valorData.split(',');
                                    const valor1Caso2 = valoresSeparadosCaso2[0];
                                    const valor2Caso2 = valoresSeparadosCaso2[1];
                                    if (this.esFechaValida(valor1Caso2) && this.esFechaValida(valor2Caso2)) {
                                          return ` AND cast(${column} as date) >= cast('${moment.utc(valor1Caso2).format('YYYY-MM-DD HH:mm:ss')}' as date) AND cast(${column} as date) <= cast('${moment.utc(valor2Caso2).format('YYYY-MM-DD HH:mm:ss')}' as date)`
                                    } else {
                                          return ` AND ${column} >= '${valor1Caso2}' AND ${column} <= '${valor2Caso2}'`
                                    }
                              case 'or':
                                    return ` or ${column} = '${valorData}'`
                              case 'bsd':
                                    const newValoresSeparadosCaso2 = valorData.split(',');
                                    const newValor1Caso2 = newValoresSeparadosCaso2[0];
                                    const newValor2Caso2 = newValoresSeparadosCaso2[1];
                                    if (this.esFechaValida(newValor1Caso2) && this.esFechaValida(newValor2Caso2)) {
                                          return ` AND TO_CHAR(${column}::timestamp, 'YYYY-MM-DD') >= TO_CHAR('${moment.utc(newValor1Caso2).format('YYYY-MM-DD HH:mm:ss')}'::timestamp, 'YYYY-MM-DD') AND TO_CHAR(${column}::timestamp, 'YYYY-MM-DD') <= TO_CHAR('${moment.utc(newValor2Caso2).format('YYYY-MM-DD HH:mm:ss')}'::timestamp, 'YYYY-MM-DD')`
                                    } else {
                                          return ` AND TO_CHAR(${column}::timestamp, 'YYYY-MM-DD') >= TO_CHAR('${newValor1Caso2}'::timestamp, 'YYYY-MM-DD') AND TO_CHAR(${column}::timestamp, 'YYYY-MM-DD') <= TO_CHAR('${newValor2Caso2}'::timestamp, 'YYYY-MM-DD')`
                                    }
                              case 'sd':
                                    return ` AND TO_CHAR(${column}::timestamp, 'YYYY-MM-DD') = TO_CHAR('${valorData}'::timestamp, 'YYYY-MM-DD')`;
                              default:
                                    return ''
                        }
                  }
                  return ''
            }
      }

      private esFechaValida = (fecha) => {
            if (fecha instanceof Date) {
                  return true
            } else if (typeof fecha === 'object') {
                  return false
            }
      }

      private addFilter = (data: any, column: string) => {
            let typeFilter = null
            const validData = this.validarDato(data)
            if (validData) {
                  return this.resultAddFilter(data, typeFilter, column)
            } else {
                  let cadena: string = ''
                  data.forEach(element => {
                        cadena = cadena === '' ? this.resultAddFilter(element, typeFilter, column) : cadena + this.resultAddFilter(element, typeFilter, column)
                  });
                  return cadena
            }
            return ''
      }

      private whereSql = (paginadorFilter, filter) => {
            let whereSql: string = null
            if (paginadorFilter) {
                  filter.map((element) => {
                        const contieneAs = /\b(as)\b/.test(element);
                        if (contieneAs) {
                              const texto = element;
                              const regexOtraPalabra = /(\S+)\s+as/;
                              const nameOrigin = texto.match(regexOtraPalabra)[1];
                              const regexDespuesDeAs = /as\s+(.+)/;
                              const renombrado = texto.match(regexDespuesDeAs)[1].trim();
                              const textoParam = paginadorFilter[renombrado] ? paginadorFilter[renombrado] : null
                              if (textoParam) {
                                    if (textoParam.includes("$")) {
                                          whereSql = whereSql ? whereSql + `${this.addFilter(textoParam, nameOrigin)}` :
                                                `${this.addFilter(textoParam, nameOrigin)}`
                                    }
                              }
                        } else {
                              const textoParam = paginadorFilter[element] ? paginadorFilter[element] : null
                              if (textoParam) {
                                    if (textoParam.includes("$")) {
                                          whereSql = whereSql ? whereSql + `${this.addFilter(textoParam ? textoParam : null, element)}` :
                                                `${this.addFilter(textoParam ? textoParam : null, element)}`
                                    }
                              }
                        }
                  })
            }
            return whereSql
      }

      private addWhereClauseIfMissing = (query) => {
            const whereRegex = /\bwhere\b/i;
            const hasWhereClause = whereRegex.test(query);
            if (!hasWhereClause) {
                  query += "\nwhere 1 = 1";
            }
            return query;
      }

      private renameKeys = (obj, keysToRename) => {
            return keysToRename.reduce((acc, keyMapping) => {
                  const [originalKey, newKey] = keyMapping.split(' as ');
                  const newKeyName = newKey ? newKey.trim() : originalKey;
                  if (obj.hasOwnProperty(originalKey)) {
                        acc[newKeyName] = obj[originalKey];
                  }
                  return acc;
            }, {});
      }

      private fromIndex = (ocurrencia, newSql) => {
            let fromIndex = -1;
            for (let i = 0; i < ocurrencia; i++) {
                  fromIndex = newSql.toUpperCase().indexOf('from'.toUpperCase(), fromIndex + 1);
                  if (fromIndex === -1) {
                        return {
                              statusCode: HttpStatus.BAD_REQUEST,
                              message: 'Error en la busqueda',
                              data: null,
                        }
                  }
            }
            return fromIndex
      }

      private findAlias = (array, key) => {
            const result = array.find(item => {
                  const parts = item.split(' as ');
                  return parts.length === 2 && parts[1] === key;
            });
            return result ? result : array.find(item => item === key) || null;
      }
      private obtenerPrimeraPalabra = (texto) => {
            const palabras = texto.split(' ');
            const asIndex = palabras.indexOf('as');

            if (asIndex !== -1) {
                  return palabras[asIndex - 1];
            } else {
                  return texto;
            }
      }



      async callView({ filter = [], paginate, sql, position = 1, count = true, countSql = null, versionSortBy = 2, limitStart = true }: callViewDto) {
            try {
                  const limit = paginate.limit || 10
                  const page = paginate.page ? (paginate.page - 1) * limit : 0
                  const newSql = this.addWhereClauseIfMissing(sql)
                  const whereSql: string = this.whereSql(paginate.filter, filter)
                  let fromIndex = this.fromIndex(position, newSql)
                  let newSqlCount = ('select count(*) as count ' + newSql.substring(fromIndex))
                  let data: any[] = null
                  if (paginate.sortBy === undefined) {
                        if (limitStart) {
                              data = await this.entityManager.query(`${newSql} ${whereSql ? whereSql : ''} limit ${limit} offset ${page}`)
                        } else {
                              data = await this.entityManager.query(`${newSql} ${whereSql ? whereSql : ''}`)
                        }
                  } else {
                        let sortBy = null
                        let numV: number = 0
                        paginate.sortBy.forEach(element => {
                              if (versionSortBy === 1) {
                                    // EN PROCESO
                              } else if (versionSortBy === 2) {
                                    if (element[1] === 'ASC' || element[1] === 'DESC') {
                                          const result = this.findAlias(filter, element[0])
                                          if (result) {
                                                sortBy = sortBy ? `${sortBy}, ${this.obtenerPrimeraPalabra(result)} ${element[1]}`
                                                      : `ORDER BY ${this.obtenerPrimeraPalabra(result)} ${element[1]}`
                                          }
                                    }
                              }
                        });
                        if (newSql.includes("order by") || newSql.includes("ORDER BY") || newSql.includes("ORDER by") || newSql.includes("order BY")) {
                              if (limitStart) {
                                    data = await this.entityManager.query(`${newSql} ${whereSql ? whereSql : ''} limit ${limit} offset ${page}`)
                              } else {
                                    data = await this.entityManager.query(`${newSql} ${whereSql ? whereSql : ''}`)
                              }
                        } else {
                              if (limitStart) {
                                    data = await this.entityManager.query(`${newSql} ${whereSql ? whereSql : ''} ${sortBy ? sortBy : ''} limit ${limit} offset ${page}`)
                              } else {
                                    data = await this.entityManager.query(`${newSql} ${whereSql ? whereSql : ''} ${sortBy ? sortBy : ''}`)
                              }
                        }
                  }
                  const keysToRename = filter
                  let renamedData = data
                  if (filter.length > 0) {
                        renamedData = data.map((item) => this.renameKeys(item, keysToRename));
                  }
                  const newData = renamedData
                  let countPaginate: any[] = [{ count: 0 }]
                  if (count) {
                        countPaginate = await this.entityManager.query(`${newSqlCount} ${whereSql ? whereSql : ''}`)
                  }
                  if (countSql) {
                        countPaginate = await this.entityManager.query(`${countSql} ${whereSql ? whereSql : ''}`)
                  }
                  return {
                        statusCode: newData.length > 0 && Object.entries(newData[0]).length > 0 ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
                        message: newData.length > 0 && Object.entries(newData[0]).length > 0 ? 'Busqueda existosa!' : 'No se encontraron registros',
                        data: newData.length > 0 && Object.entries(newData[0]).length > 0 ? newData : [],
                        count: newData.length > 0 && Object.entries(newData[0]).length > 0 ? Number(countPaginate[0].count) : 0
                  }
            } catch (error) {
                  return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: [error.message]
                  }
            }
      }

}

