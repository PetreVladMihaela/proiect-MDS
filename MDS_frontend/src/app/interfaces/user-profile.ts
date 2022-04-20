import { User } from "./user"
import { UserAddress } from "./user-address"

export interface UserProfile {
    email: string
    owner: User
    firstName?: string
    lastName?: string
    age?: number
    isMusician?: boolean
    canSing?: boolean
    playedInstrument?: string
    preferredMusicGenre?: string
    bandId?: number
    address?: UserAddress
}