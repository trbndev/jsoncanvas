import type Edge from "./edge";
import type GenericNode from "./node";

export class JSONCanvas {
    private nodes: GenericNode[] = [];
    private edges: Edge[] = [];

    constructor(nodes?: GenericNode[], edges?: Edge[]) {
        if(nodes) {
            this.nodes = nodes;
        }
        if(edges) {
            this.edges = edges;
        }
    }

    public addNode(node: GenericNode) {
        if(this.nodes.find(n => n.id === node.id)) {
            throw new Error("A node with the same ID already exists in this.nodes");
        }
        this.nodes.push(node);
    }

    public addEdge(edge: Edge) {
        if(this.edges.find(e => e.id === edge.id)) {
            throw new Error("An edge with the same ID already exists in this.edges");
        }
        this.edges.push(edge);
    }

    public getNode(id: string) {
        return this.nodes.find(n => n.id === id);
    }
    public getEdge(id: string) {
        return this.edges.find(e => e.id === id);
    }

    public getNodes() {
        return this.nodes;
    }
    public getEdges() {
        return this.edges;
    }

    public removeNode(id: string) {
        this.nodes = this.nodes.filter(n => n.id !== id);
        this.edges = this.edges.filter(e => e.fromNode !== id && e.toNode !== id);
    }

    public removeEdge(id: string) {
        this.edges = this.edges.filter(e => e.id !== id);
    }

    public toString() {
        return JSON.stringify({
            nodes: this.nodes,
            edges: this.edges
        });
    }

    public static fromString(json: string) {
        const obj = JSON.parse(json);
        return new JSONCanvas(obj.nodes, obj.edges);
    }
}

export default JSONCanvas;