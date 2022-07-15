declare module '@shopmacher/bad-words' {
    export default class Filter {
        constructor(options: {
            emptyList?: boolean
            exclude?: any[]
            splitRegex?: string
            placeHolder?: string
            regex?: string
            replaceRegex?: string
        })
        public isProfane(string: string): boolean
        public replaceWord(string: string): string
        public clean(string: string): string
        public addWords(...word: string[]): void
        public removeWords(...word: string[]): void
    }
}
