type MessageType = 'image' | 'audio' | string
type Message = {
    id: number,
    type: MessageType,
    msg: string,
}
const messages: Message[] = [
    { id: 1, type: 'image', msg: '你好1' },
    { id: 2, type: 'audio', msg: '你好2' },
    { id: 3, type: 'audio', msg: '你好3' },
    { id: 4, type: 'image', msg: '你好4' },
    { id: 5, type: 'image', msg: '你好5' },
    { id: 6, type: 'audio', msg: '你好6' },
]
function getMessage(id: number): Message;
function getMessage(type: MessageType, count: number): Message[];
function getMessage(value: number | MessageType, count: number = 1): Message | Message[] | undefined {
    return typeof value === 'number'
        ? messages.find(m => m.id === value)
        : messages.filter(m => m.type === value).splice(0, count)
}

const res1 = getMessage(2)
console.log(res1.type)

const res2 = getMessage('image', 2)
console.log(res2.length)

console.log(res1)
console.log(res2)

export {}