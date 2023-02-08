
let obj: object = {username: 'jinle', age: 18}

const username = 'username'

type ObjType = {
    username: string,
    age: number
}
const res = (obj as ObjType)[username]