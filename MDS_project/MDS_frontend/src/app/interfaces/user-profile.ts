import { BandAndUserMatch } from "./band-user-match"
import { User } from "./user"
import { UserAddress } from "./user-address"

export interface UserProfile {
    userId: number
    owner: User
    firstName?: string
    lastName?: string
    age?: number
    occupation?: string
    phone?: string
    canSing?: boolean
    playedInstrument?: string
    preferredMusicGenre?: string
    trait1?: string
    trait2?: string
    bandId?: number
    address?: UserAddress

    bandAndUserMatches?: BandAndUserMatch[]
}