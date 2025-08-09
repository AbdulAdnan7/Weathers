export interface Coordinates {
    lat: number,
    lon: number,
}

export interface WeatherConditions {
    id: number,
    main: string,
    description: string,
    icon: string,
}