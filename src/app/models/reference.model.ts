export interface IReference {
    uuid?: string;
    name: string;
    fields: IField[];
    example: string;
}

export interface IField {
    uuid: string;
    position: number;
    value?: string;
    label: string;
    placeholder: string;
    prefix: string;
    suffix: string;
    type: FieldType;
    dateFormat?: string;
    required: boolean;
    italic: boolean;
}

export enum FieldType {
  TEXT = "text",
  DATE = "date",
  NUMBER = "number",
  URL = "url"
}
