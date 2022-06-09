import { UserProfile } from "./user-profile"
import { BandHQ } from "./band-hq"
import { BandAndUserMatch } from "./band-user-match"

export interface MusicalBand {
    bandId: number
    name: string
    musicGenre?: string
    dateFormed: Date
    isComplete: boolean
    members?: UserProfile[]
    hq?: BandHQ

    bandAndUserMatches?: BandAndUserMatch[]
}