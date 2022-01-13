import * as React from "react";

export interface State {
  "id": string,
  "startDate": string,
  "endDate": string,
  "clinicianName": string,
  "patient": Patient,
  "status": string,
}

export type Patient = {
  "id": string,
  "name": string,
}

export type Order = 'asc' | 'desc';

export type   StateList = State[]

export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}



export interface EnhancedTableProps {
  numSelected: string | number;
  onRequestSort: (event: React.MouseEvent<unknown, MouseEvent>, property: string | keyof State) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
