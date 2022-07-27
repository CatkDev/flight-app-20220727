export interface FLIGHT {
    id: number;
    from: string;
    to: string;
    date: string;

    delayed?: boolean;

    distance?: number;
    calcPrice?(): number;
}
