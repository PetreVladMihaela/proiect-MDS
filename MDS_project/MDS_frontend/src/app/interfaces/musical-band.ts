import { UserProfile } from "./user-profile"
import { BandHQ } from "./band-hq"

export interface MusicalBand {
    bandId: number
    name: string
    musicGenre?: string
    dateFormed: Date
    isComplete: boolean
    members?: UserProfile[]
    hq?: BandHQ
}