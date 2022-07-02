
export type Coord = { x: number, y: number }
export type Coords = Coord[];

export type Direction = 'left' | 'right';

export type LinesData = {
  id: '', // 用于和接口字段对比，然后赋值 value 
  value: number,
  name: string, // 名称
  color: string, // 颜色
  coord: Coords,  // 贝塞尔曲线坐标
  direction: Direction,   // 布局方向 - 左|右
  isBoundary: boolean, // 是否是最下边的区域，会进行坐标中心点位置计算
  nameOffset: number[], // 名称偏移量[x, y],
  height: number,
  offsetCord: Coord[]
}

export const linesLeft: LinesData[] = [
  {
    id: '',
    name: ' 光伏发电',
    value: 160,
    color: "rgba(0, 168, 116)",
    coord: [
      { x: 0, y: 100 },
      { x: 233, y: 100 },
      { x: 238, y: 232 },
      { x: 400, y: 232 },
    ],
    direction: 'left',
    isBoundary: false,
    nameOffset: [-80, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: '',
    value: 10,
    color: "rgba(0, 168, 116)",
    coord: [
      { x: 0, y: 279 },
      { x: 73, y: 278 },
      { x: 117, y: 356 },
      { x: 168, y: 357 },
    ],
    direction: 'left',
    isBoundary: false,
    nameOffset: [0, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: '',
    value: 20,
    color: "rgba(238, 186, 24)",
    coord: [
      { x: 0, y: 430 },
      { x: 92, y: 416 },
      { x: 106, y: 340 },
      { x: 168, y: 357 },
    ],
    direction: 'left',
    isBoundary: false,
    nameOffset: [-80, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: '市电发电',
    value: 60,
    color: "rgba(238, 186, 24)",
    coord: [
      { x: 0, y: 518 },
      { x: 264, y: 508 },
      { x: 176, y: 384 },
      { x: 400, y: 392 },
    ],
    direction: 'left',
    isBoundary: true,
    nameOffset: [-80, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: '储能',
    value: 30,
    color: "rgba(191, 124, 240)",
    coord: [
      { x: 160, y: 350 },
      { x: 224, y: 348 },
      { x: 336, y: 372 },
      { x: 402, y: 360 },
    ],
    direction: 'left',
    isBoundary: false,
    nameOffset: [-40, -5],
    height: 0,
    offsetCord: []
  }
]

export const linesRight: LinesData[] = [
  {
    id: '',
    name: ' 暖通',
    value: 80,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 232 },
      { x: 567, y: 232 },
      { x: 566, y: 98 },
      { x: 776, y: 98 },
    ],
    direction: 'right',
    isBoundary: false,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: ' 插座',
    value: 20,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 310 },
      { x: 556, y: 309 },
      { x: 637, y: 212 },
      { x: 776, y: 212 },
    ],
    direction: 'right',
    isBoundary: false,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: ' 充电桩',
    value: 20,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 320 },
      { x: 562, y: 320 },
      { x: 641, y: 276 },
      { x: 776, y: 275 },
    ],
    direction: 'right',
    isBoundary: false,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: ' 其他',
    value: 10,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 345 },
      { x: 515, y: 300 },
      { x: 653, y: 346 },
      { x: 776, y: 344 },
    ],
    direction: 'right',
    isBoundary: false,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: ' 安防',
    value: 20,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 340 },
      { x: 484, y: 318 },
      { x: 682, y: 395 },
      { x: 776, y: 391 },
    ],
    direction: 'right',
    isBoundary: false,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: ' 电梯',
    value: 10,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 343 },
      { x: 599, y: 346 },
      { x: 609, y: 430 },
      { x: 776, y: 428 },
    ],
    direction: 'right',
    isBoundary: false,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },

  {
    id: '',
    name: ' 照明',
    value: 40,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 392 },
      { x: 647, y: 391 },
      { x: 528, y: 514 },
      { x: 776, y: 513 },
    ],
    direction: 'right',
    isBoundary: true,
    nameOffset: [20, 0],
    height: 0,
    offsetCord: []
  },
]
