import type CanvasColor from "./color";

export interface GenericNode {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color?: CanvasColor;
}

export interface TextNode extends GenericNode {
    type: "text";
    text: string;
}

export interface FileNode extends GenericNode {
    type: "file";
    file: string;
    subpath?: string;
}

export interface LinkNode extends GenericNode {
    type: "link";
    url: string;
}

export type GroupNodeBackgroundStyle = "cover" | "ratio" | "repeat";

export interface GroupNode {
    type: "group";
    label?: string;
    background?: string;
    backgroundStyle?:  GroupNodeBackgroundStyle;
}

export default GenericNode;