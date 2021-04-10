export interface RefModel {
    uuid: string;
    name: string;
    fields: Field[];
    format: string;
}

export interface Field {
    name: string;
    label: string;
    type: string;
    required: boolean;
}