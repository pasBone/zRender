import "./style.css";
import * as zRender from "zrender";
import { leftCoords, rightCoords, CoordsData } from "./coords";

const zr = zRender.init(document.getElementById('app'));

class SankeyPathShape {
  x1 = 0;
  y1 = 0;

  x2 = 0;
  y2 = 0;

  cpx1 = 0;
  cpy1 = 0;

  cpx2 = 0;
  cpy2 = 0;

  extent = 0;
}

const Sankey = zRender.Path.extend({
  type: 'sankey',

  shape: new SankeyPathShape(),

  buildPath(ctx: CanvasRenderingContext2D, shape: SankeyPathShape) {
    const { extent } = shape;

    ctx.moveTo(shape.x1, shape.y1);

    ctx.bezierCurveTo(
      shape.cpx1, shape.cpy1,
      shape.cpx2, shape.cpy2,
      shape.x2, shape.y2
    );

    ctx.lineTo(shape.x2, shape.y2 + extent);

    ctx.bezierCurveTo(
      shape.cpx2, shape.cpy2 + extent,
      shape.cpx1, shape.cpy1 + extent,
      shape.x1, shape.y1 + extent
    );

    ctx.closePath();
  },
});

function getSankeyShape(data: CoordsData[]) {
  const total = data.reduce((cur, next) => cur + next.value, 0);
  return data.map((item, index) => {
    const { coord } = item;
    const scale = 420 / total * 0.7;
    const extent = item.value * scale;
    const base = index === data.length - 1 ? extent : 0;
    return {
      ...item,
      shape: {
        x1: coord[0].x + 100,
        y1: coord[0].y - base,
        cpx1: coord[1].x + 100,
        cpy1: coord[1].y - base,
        cpx2: coord[2].x + 100,
        cpy2: coord[2].y - base,
        x2: coord[3].x + 100,
        y2: coord[3].y - base,
        extent,
      },
    }
  });
}

function getGradientColor(color: string, start: Array<number>, end: Array<number>, isReverse: boolean) {
  let alphaColor = color.replace(`)`, `, ${0.6})`);
  const colors = isReverse ? [alphaColor, color] : [color, alphaColor]
  var gradientColor = new zRender.LinearGradient(start[0], start[1], end[0], end[1], undefined, true);
  gradientColor.addColorStop(0, colors[0]);
  gradientColor.addColorStop(1, colors[1]);
  return gradientColor;
}

function renderRect(x: number, y: number, height: number, color: string) {
  const extentHeight = 8; // 额外拉长的距离;
  return new zRender.Rect({
    shape: {
      x,
      y: y - extentHeight / 2,
      r: 3,
      width: 6,
      height: height + extentHeight // 曲线侧边的矩形边框
    },
    style: {
      fill: color
    }
  })
}

function renderSankey(shape: SankeyPathShape, color: string, isReverse: boolean) {
  return new Sankey({
    shape,
    style: {
      fill: getGradientColor(color, [shape.x1, shape.y1], [shape.x2, shape.y2], isReverse),
    }
  });
}

function renderText(text: string, x: number, y: number) {
  return new zRender.Text({
    style: {
      text: text,
      fill: '#000',
      font: '16px Arial',
      verticalAlign: 'middle',
      align: 'left',
      x,
      y
    }
  })
}

function renderLeft() {
  var group = new zRender.Group();
  const shapes = getSankeyShape(leftCoords);

  const gffd = shapes.find(item => item.id === 'gffd')!;
  const sdfd = shapes.find(item => item.id === 'sdfd')!;

  shapes.forEach(data => {
    let { shape, color, name, id } = data;
    if (id === 'gffd-branch') {
      shape.y1 = gffd.shape.y1 + gffd.shape.extent + 20;
    }
    
    if (id === 'sdfd-branch') {
      shape.y1 = sdfd.shape.y1 - shape.extent - 20;
      shape.cpy1 = sdfd.shape.cpy1 - shape.extent - 20;
    }

    group
      .add(renderSankey(shape, color, false))
      .add(renderRect(shape.x1, shape.y1, shape.extent, color))
      .add(renderText(name, shape.x1 - 80, shape.y1 + shape.extent / 2));
  });
  zr.add(group);
}

function renderRight() {
  var group = new zRender.Group();
  const shapes = getSankeyShape(rightCoords);

  shapes.forEach((data, index) => {
    let { shape, color, name } = data;

    if (index > 0 && index !== shapes.length - 1) {
      shape.y2 = shapes[index - 1].shape.y2 + shapes[index - 1].shape.extent + 22
    }

    group
      .add(renderSankey(shape, color, true))
      .add(renderRect(shape.x2, shape.y2, shape.extent, color))
      .add(renderText(name, shape.x2 + 20, shape.y2 + shape.extent / 2));
  });
  zr.add(group);
}

renderLeft();
renderRight();
