import { UserProfile } from "./user-profile"
import { BandHQ } from "./band-hq"

export interface MusicalBand {
    bandId: number
    name: string
    musicGenre?: string
    dateFormed?: Date
    complete?: boolean
    members?: UserProfile[]
    hq?: BandHQ
}