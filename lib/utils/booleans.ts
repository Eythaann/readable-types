import { If } from "./conditions";
import { IsNever } from "./never";

export type And<T extends boolean[]> = If<IsNever<Extract<T[number], false>>, true, false> ;
export type Or<T extends boolean[]> = If<IsNever<Extract<T[number], true>>, false, true> ;
export type Not<T extends Boolean> = T extends true ? false : true;