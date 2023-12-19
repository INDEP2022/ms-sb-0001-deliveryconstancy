import { PaginateQuery } from "nestjs-paginate";

export class callViewDto {
    paginate: PaginateQuery | any
    sql: string
    filter?: string[]
    position?: number
    count?: boolean
    countSql?: string
    versionSortBy?: number
    limitStart?: boolean
}