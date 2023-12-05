interface Coffe {
  id: number
  thumbnailUrl: string
  typeCoffe: string[]
  title: string
  price: number
  description: string
  availableQuantity: number
}

export const coffes: Coffe[] = [
  {
    id: 1,
    thumbnailUrl: 'src/assets/coffeImage/Expresso-tradicional.png',
    typeCoffe: ['Tradicional', 'gelado'],
    title: 'Expresso Tradicional',
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
    availableQuantity: 10,
  },
  {
    id: 2,
    thumbnailUrl: 'src/assets/coffeImage/Expresso-americano.png',
    typeCoffe: ['Tradicional'],
    title: 'Expresso Americano',
    price: 9.5,
    description: 'Expresso diluído, menos intenso que o tradicional',
    availableQuantity: 10,
  },
  {
    id: 3,
    thumbnailUrl: 'src/assets/coffeImage/Expresso-cremoso.png',
    typeCoffe: ['Tradicional', 'gelado'],
    title: 'Expresso Cremoso',
    price: 9.0,
    description: 'Café expresso tradicional com espuma cremosa',
    availableQuantity: 10,
  },
  {
    id: 4,
    thumbnailUrl: 'src/assets/coffeImage/Expresso-cremoso.png',
    typeCoffe: ['Tradicional', 'gelado'],
    title: 'Expresso Cremoso',
    price: 9.2,
    description: 'Café expresso tradicional com espuma cremosa',
    availableQuantity: 10,
  },
  {
    id: 5,
    thumbnailUrl: 'src/assets/coffeImage/Cafe-com-leite.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Café com leite',
    price: 9.2,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    availableQuantity: 10,
  },
  {
    id: 6,
    thumbnailUrl: 'src/assets/coffeImage/Latte.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Latte',
    price: 9.2,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    availableQuantity: 10,
  },
  {
    id: 7,
    thumbnailUrl: 'src/assets/coffeImage/Capuccino.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Capuccino',
    price: 9.2,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    availableQuantity: 10,
  },
  {
    id: 8,
    thumbnailUrl: 'src/assets/coffeImage/Macchiato.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Macchiato',
    price: 9.2,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    availableQuantity: 10,
  },
  {
    id: 9,
    thumbnailUrl: 'src/assets/coffeImage/Mocaccino.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    price: 9.2,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    availableQuantity: 10,
  },
  {
    id: 10,
    thumbnailUrl: 'src/assets/coffeImage/Chocolate-quente.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Chocolate Quente',
    price: 9.2,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    availableQuantity: 10,
  },
  {
    id: 11,
    thumbnailUrl: 'src/assets/coffeImage/Cubano.png',
    typeCoffe: ['Tradicional', 'Alcoólico', 'com leite'],
    title: 'Cubano',
    price: 9.2,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    availableQuantity: 10,
  },
  {
    id: 12,
    thumbnailUrl: 'src/assets/coffeImage/Havaiano.png',
    typeCoffe: ['Especial'],
    title: 'Havaiano',
    price: 9.2,
    description: 'Bebida adocicada preparada com café e leite de coco',
    availableQuantity: 10,
  },
  {
    id: 13,
    thumbnailUrl: 'src/assets/coffeImage/Arabe.png',
    typeCoffe: ['Especial'],
    title: 'Árabe',
    price: 9.2,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    availableQuantity: 10,
  },
  {
    id: 14,
    thumbnailUrl: 'src/assets/coffeImage/Irlandes.png',
    typeCoffe: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    price: 9.2,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    availableQuantity: 10,
  },
]
