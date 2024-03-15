import type CanvasColor from "./color";

export type EdgeSide = "top" | "right" | "bottom" | "left";
export type EdgeEnd = "none" | "arrow";

export interface Edge {
    id: string;
    fromNode: string;
    fromSide?: EdgeSide;
    fromEnd?: EdgeEnd;
    toNode: string;
    toSide?: EdgeSide;
    toEnd?: EdgeEnd;
    color?: CanvasColor;
    label?: string;
}

export default Edge;