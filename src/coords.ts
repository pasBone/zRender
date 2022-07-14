
export type Coord = { x: number, y: number }
export type Coords = Coord[];

export type CoordsData = {
  value: number,
  name: string, // 名称
  color: string, // 颜色
  coord: Coords,  // 贝塞尔曲线坐标
  id: string
  // direction: 'left' | 'right'
}

export const leftCoords: CoordsData[] = [
  {
    name: ' 光伏发电',
    id: 'gffd',
    value: 160,
    color: "rgba(0, 168, 116)",
    coord: [
      { x: 0, y: 100 },
      { x: 233, y: 100 },
      { x: 238, y: 232 },
      { x: 400, y: 232 },
    ],
  },

  {
    name: '',
    id: 'gffd-branch',
    value: 20,
    color: "rgba(0, 168, 116)",
    coord: [
      { x: 0, y: 279 },
      { x: 73, y: 278 },
      { x: 117, y: 356 },
      { x: 168, y: 357 },
    ],
  },

  {
    name: '',
    id: 'sdfd-branch',
    value: 20,
    color: "rgba(138, 186, 24)",
    coord: [
      { x: 0, y: 430 },
      { x: 92, y: 416 },
      { x: 106, y: 340 },
      { x: 168, y: 357 },
    ],
  },

  {
    name: '市电发电',
    id: 'sdfd',
    value: 100,
    color: "rgba(238, 186, 24)",
    coord: [
      { x: 0, y: 518 },
      { x: 264, y: 508 },
      { x: 176, y: 384 },
      { x: 400, y: 392 },
    ],
  },

  // {
  //   name: '储能',
  //   value: 30,
  //   color: "rgba(191, 124, 240)",
  //   coord: [
  //     { x: 160, y: 350 },
  //     { x: 224, y: 348 },
  //     { x: 336, y: 372 },
  //     { x: 402, y: 360 },
  //   ],
  // }
]

export const rightCoords: CoordsData[] = [
  {
    name: ' 暖通',
    id: 'nt',
    value: 80,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 232 },
      { x: 567, y: 232 },
      { x: 566, y: 98 },
      { x: 776, y: 98 },
    ],
  },

  {
    name: ' 插座',
    id: 'cz',
    value: 20,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 310 },
      { x: 556, y: 309 },
      { x: 637, y: 212 },
      { x: 776, y: 212 },
    ],
  },

  {
    name: ' 充电桩',
    id: 'cdz',
    value: 20,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 320 },
      { x: 562, y: 320 },
      { x: 641, y: 276 },
      { x: 776, y: 275 },
    ],
  },

  {
    name: ' 其他',
    id: 'qt',
    value: 10,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 345 },
      { x: 515, y: 300 },
      { x: 653, y: 346 },
      { x: 776, y: 344 },
    ],
  },

  {
    name: ' 安防',
    id: 'af',
    value: 20,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 340 },
      { x: 484, y: 318 },
      { x: 682, y: 395 },
      { x: 776, y: 391 },
    ],
  },

  {
    name: ' 电梯',
    id: 'dt',
    value: 10,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 343 },
      { x: 599, y: 346 },
      { x: 609, y: 430 },
      { x: 776, y: 428 },
    ],
  },

  {
    name: ' 照明',
    id: 'zm',
    value: 40,
    color: "rgba(33, 112, 243)",
    coord: [
      { x: 400, y: 392 },
      { x: 647, y: 391 },
      { x: 528, y: 514 },
      { x: 776, y: 518 },
    ],
  },
]
