import { Prisma } from ".prisma/client"

export class User implements Prisma.UserUncheckedCreateInput {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    cpf: string
    profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput
}