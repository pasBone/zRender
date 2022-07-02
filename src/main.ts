import "./style.css";
import * as zRender from "zrender";


const zr = zRender.init(document.getElementById('app'));

// const gradientColor = new zRender.LinearGradient(0, 100, 400, 232)
// gradientColor.addColorStop(0.5, 'red')
// gradientColor.addColorStop(1, 'blue')

var gradientColor = new zRender.LinearGradient(0, 100, 400, 232, undefined, true);
gradientColor.addColorStop(0, 'red');
gradientColor.addColorStop(1, 'black');

console.log(gradientColor)



// const shape = {
//   "x1": 365.375,
//   "y1": 81.215,
//   "x2": 680.75,
//   "y2": 141.215,
//   "cpx1": 523.0625,
//   "cpy1": 81.215,
//   "cpx2": 523.0625,
//   "cpy2": 141.215,
//   "extent": 120,
// }


// const extent = shape.extent;
// ctx.moveTo(shape.x1, shape.y1);
// ctx.bezierCurveTo(
//   shape.cpx1, shape.cpy1,
//   shape.cpx2, shape.cpy2,
//   shape.x2, shape.y2
// );

// ctx.lineTo(shape.x2, shape.y2 + extent);
// ctx.bezierCurveTo(
//   shape.cpx2, shape.cpy2 + extent,
//   shape.cpx1, shape.cpy1 + extent,
//   shape.x1, shape.y1 + extent
// );
// ctx.closePath();

const shape = new zRender.BezierCurve({
  shape: {
    x1: 0,
    y1: 100,
    cpx1: 233,
    cpy1: 100,
    cpx2: 238,
    cpy2: 232,
    x2: 400,
    y2: 232
  },
  style: {
    stroke: gradientColor,
    lineWidth: 30
  }
});

zr.add(shape);
