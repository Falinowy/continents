export interface Country {
    name: {
        common: string;
    };
    capital: string[];
    population: number;
    area: number;
    region: string;
    subregion: string;
    flags: {
        png: string;
    };
}
