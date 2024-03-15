import { describe, expect, it } from 'vitest'
import { JSONCanvas, GenericNode, TextNode, Edge, CanvasColor } from "../src/index";


// Create simple JSONCanvas, add a node and then export it to string
describe('JSONCanvas', () => {
  it('should create a simple JSONCanvas, add a node and then export it to string', () => {
    // import { JSONCanvas, GenericNode, TextNode, Edge, CanvasColor } from "../src/index";
    const canvas = new JSONCanvas();
    const node: TextNode = {
        id: "node1",
        type: "text",
        x: 100,
        y: 100,
        width: 100,
        height: 50,
        text: "Hello, world!",
        color: CanvasColor.RED
    };
    canvas.add_node(node);
    const result = canvas.to_string();
    expect(result).toEqual('{"nodes":[{"id":"node1","type":"text","x":100,"y":100,"width":100,"height":50,"text":"Hello, world!","color":1}],"edges":[]}')
  })
});

// Serialize 'Pale Sight.canvas' JSON Canvas to JSONCanvas
describe('JSONCanvas', () => {
  it('should serialize JSON Canvas to JSONCanvas object', () => {
    const canvasString = JSON.stringify(require('./Canvas.json'));
    const canvas = JSONCanvas.from_string(canvasString);
    const result = canvas.to_string();
    expect(result).toEqual(canvasString);
  })
});