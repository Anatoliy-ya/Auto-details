// {
//   id: ,
//   name: , Название
//   category: , Категория
//   imageUrl: , Путь к изображению
//   description: , Описание
//   article: , Артикул
// },

const products = [
  {
    id: 'PZ-2108',
    name: 'Подшипник задней ступицы 2108',
    category: '1category',
    imageUrl: '../assets/roliki-42-37-0.jpg',
    description: 'ВАЗ 2108-2190',
    article: 'PZ-2108',
  },
  {
    id: 'PP-2108',
    name: 'Подшипник передней ступицы 2108',
    category: '1category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2108-2109',
    article: 'PP-2108',
  },
  {
    id: 'PP-1118',
    name: 'Подшипник передней ступицы 1118',
    category: '1category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 1117-1119',
    article: 'PP-1118',
  },
  {
    id: 'PP-2180А',
    name: 'Подшипник передней ступици С АБС ЛАРГУС, ВЕСТА',
    category: '1category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Largus, X-Ray, Renault Logan, Lada Vesta',
    article: 'PP-2180А',
  },
  {
    id: 'PP-2180',
    name: 'Подшипник передней ступици БЕЗ АБС ЛАРГУС, ВЕСТА',
    category: '1category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta, Renault Logan',
    article: 'PP-2180',
  },
  {
    id: 'PZ-4061',
    name: 'Подшипник задней ступицы Lada Largus',
    category: '1category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Largus',
    article: 'PZ-4061',
  },
  {
    id: 'PZ-2180',
    name: 'Подшипник задней ступицы Lada Vesta',
    category: '1category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta, Renault Logan',
    article: 'PZ-2180',
  },
  {
    id: 'CV-2110N',
    name: 'ШРУС наружный 2108',
    category: '2category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2108-2190',
    article: 'CV-2110N',
  },
  {
    id: 'CV-1118N-A',
    name: 'ШРУС наружный с ABS 1118',
    category: '2category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 1118-2190',
    article: 'CV-1118N-A',
  },
  {
    id: 'CV-2110V',
    name: 'ШРУС внутренний 2110',
    category: '2category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2108-2190',
    article: 'CV-2110V',
  },
  {
    id: 'CSR-2101',
    name: 'Цилиндр сцепления рабочий 2101',
    category: '3category',
    imageUrl: '../assets/roliki-42-37-0.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CSR-2101',
  },
  {
    id: 'CSG-2101',
    name: 'Цилиндр сцепления главный 2101',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CSG-2101',
  },
  {
    id: 'CGT-2101',
    name: 'Цилимндр тормозный главный 2101',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CGT-2101',
  },
  {
    id: 'CZ-2105',
    name: 'Цилиндр тормозной задний 2105',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2190',
    article: 'CZ-2105',
  },
  {
    id: 'CP-2108R',
    name: 'Цилиндр переднего тормоза правый 2108',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2108-2190',
    article: 'CP-2108R',
  },
  {
    id: 'CP-2108L',
    name: 'Цилиндр переднего тормоза левый 2108',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: '2108-2190',
    article: 'CP-2108L',
  },
  {
    id: 'CP-21214R',
    name: 'Цилиндр переднего тормоза правый 21214',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 21214',
    article: 'CP-21214R',
  },
  {
    id: 'CP-21214L',
    name: 'Цилиндр переднего тормоза левый 21214',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 21214',
    article: 'CP-21214L',
  },
  {
    id: 'CP-2121R',
    name: 'Цилиндр переднего тормоза правый 2121',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2121',
    article: 'CP-2121R',
  },
  {
    id: 'CP-2121L',
    name: 'Цилиндр переднего тормоза левый 2121',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2121',
    article: 'CP-2121L',
  },
  {
    id: 'CP-2101NR',
    name: 'Цилиндр переднего тормоза наружный правый 2101',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CP-2101NR',
  },
  {
    id: 'CP-2101NL',
    name: 'Цилиндр переднего тормоза наружный левый 2101',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CP-2101NL',
  }, 
  {
    id: 'CP-2101VR',
    name: 'Цилиндр переднего тормоза внутренний правый 2101',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CP-2101VR',
  },
  {
    id: 'CP-2101VL',
    name: 'Цилиндр переднего тормоза внутренний левый 2101',
    category: '3category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'CP-2101VL',
  },
  {
    id: 'KP-2108',
    name: 'Колодки тормозные передние 2108',
    category: '4category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2108-2190',
    article: 'KP-2108',
  },
  {
    id: 'KP-2110',
    name: 'Колодки тормозные передние 2110',
    category: '4category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2108-2190, под датчик АБС',
    article: 'KP-2110',
  },
  {
    id: 'KP-2121',
    name: 'Колодки тормозные передние 2121',
    category: '4category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2121-2123',
    article: 'KP-2121',
  },
  {
    id: 'KP-2101',
    name: 'Колодки тормозные передние 2101',
    category: '4category',
    imageUrl: '../assets/nasos.jpg',
    description: 'ВАЗ 2101-2107',
    article: 'KP-2101',
  },
  {
    id: 'KP-2180',
    name: 'Колодки тормозные передние 2180',
    category: '4category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta, Lada Largus (16кл), Lada X-Ray',
    article: 'KP-2180',
  },
  {
    id: 'RN-2180K',
    name: 'Комплект рулевых наконечников 2180 Веста',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'RN-2180K',
  },
  {
    id: 'RN-4061K',
    name: 'Комплект рулевых наконечников Lada Largus',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Largus 1,6 16V (2012-н.в.), X-Ray, Renault Logan 1,4 1,6 (2004-н.в)',
    article: 'RN-4061K',
  },
  {
    id: 'RN-2180R',
    name: 'Рулевой наконечник правый 2180 Веста',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'RN-2180R',
  },
  {
    id: 'RN-2180L',
    name: 'Рулевой наконечник левый 2180 Веста',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'RN-2180L',
  },
  {
    id: 'RN-4061R',
    name: 'Рулевой наконечник правый Lada Largus',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Largus 1,6 16V (2012-н.в.), X-Ray, Renault Logan 1,4 1,6 (2004-н.в)',
    article: 'RN-4061R',
  },
  {
    id: 'RN-4061L',
    name: 'Рулевой наконечник левый Lada Largus',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Largus 1,6 16V (2012-н.в.), X-Ray, Renault Logan 1,4 1,6 (2004-н.в)',
    article: 'RN-4061L',
  },
  {
    id: 'RT-4061',
    name: 'Рулевая тяга Lada Largus',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Largus 1,6 16V (2012-н.в.), Renault Logan 1,4 1,6 (2004-н.в)',
    article: 'RT-4061',
  },
  {
    id: 'RT-2180',
    name: 'Рулевая тяга Lada Vesta',
    category: '5category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'RT-2180',
  },
  {
    id: 'SH-2180R',
    name: 'Шаровая опора правая Lada Vesta',
    category: '6category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'SH-2180R',
  },
  {
    id: 'SH-2180L',
    name: 'Шаровая опора левая Lada Vesta',
    category: '6category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'SH-2180L',
  },
  {
    id: 'SH-2180L',
    name: 'Шаровая опора левая Lada Vesta',
    category: '6category',
    imageUrl: '../assets/nasos.jpg',
    description: 'Lada Vesta',
    article: 'SH-2180L',
  },
];

export default products;
