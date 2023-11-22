interface Coffe {
  id: number
  thumbnailNameFile: string
  typeCoffe: string[]
  title: string
  price: number
  description: string
}

export const coffes: Coffe[] = [
  {
    id: 1,
    thumbnailNameFile: 'Expresso-tradicional.png',
    typeCoffe: ['Tradicional', 'gelado'],
    title: 'Expresso Tradicional',
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    id: 2,
    thumbnailNameFile: 'Expresso-americano.png',
    typeCoffe: ['Tradicional'],
    title: 'Expresso Americano',
    price: 9.5,
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    id: 3,
    thumbnailNameFile: 'Expresso-cremoso.png',
    typeCoffe: ['Tradicional', 'gelado'],
    title: 'Expresso Cremoso',
    price: 9.0,
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: 4,
    thumbnailNameFile: 'Expresso-cremoso.png',
    typeCoffe: ['Tradicional', 'gelado'],
    title: 'Expresso Cremoso',
    price: 9.2,
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    id: 5,
    thumbnailNameFile: 'Cafe-com-leite.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Café com leite',
    price: 9.2,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    id: 6,
    thumbnailNameFile: 'Latte.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Latte',
    price: 9.2,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    id: 7,
    thumbnailNameFile: 'Capuccino.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Capuccino',
    price: 9.2,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    id: 8,
    thumbnailNameFile: 'Macchiato.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Macchiato',
    price: 9.2,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    id: 9,
    thumbnailNameFile: 'Mocaccino.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Mocaccino',
    price: 9.2,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    id: 10,
    thumbnailNameFile: 'Chocolate-quente.png',
    typeCoffe: ['Tradicional', 'com leite'],
    title: 'Chocolate Quente',
    price: 9.2,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    id: 11,
    thumbnailNameFile: 'Cubano.png',
    typeCoffe: ['Tradicional', 'Alcoólico', 'com leite'],
    title: 'Cubano',
    price: 9.2,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    id: 12,
    thumbnailNameFile: 'Havaiano.png',
    typeCoffe: ['Especial'],
    title: 'Havaiano',
    price: 9.2,
    description: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    id: 13,
    thumbnailNameFile: 'Arabe.png',
    typeCoffe: ['Especial'],
    title: 'Árabe',
    price: 9.2,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    id: 14,
    thumbnailNameFile: 'Irlandes.png',
    typeCoffe: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    price: 9.2,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]
