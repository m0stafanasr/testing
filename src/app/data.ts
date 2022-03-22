export interface Data {
    id: number,
    level: number,
    code: number,
    translations: {
        en: {
            name: string,
            description: string
        }
    },
    name: string,
    description: string
}
