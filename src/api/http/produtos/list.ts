import { ListaProduto } from '~/domain/entities/produtos';

const data: ListaProduto[] = [
  {
    id: '1',
    title: 'Vela Honda Civic 2010/2016',
    price: 'R$ 100,00',
    priceDescount: 'R$ 130,00',
    imageSrc: [
      '/images/velas_de_carro.jpg',
      '/images/velas_de_carro_02.jpg',
      '/images/velas_de_carro_03.jpg',
    ],
  },
  {
    id: '2',
    title: 'Laterna Celta 2003 LD vermelha',
    price: 'R$ 200,00',
    priceDescount: 'R$ 223,00',
    imageSrc: ['/images/laterna_celta_2003.webp'],
  },
  {
    id: '3',
    title: 'Pneu Continental Aro 18 ContiSportContact 5 * 225/45R18 91Y Run Flat',
    price: 'R$ 1.200,00',
    priceDescount: 'R$ 1.460,00',
    imageSrc: ['/images/pneu.webp'],
  },
  {
    id: '4',
    title: 'Sapata Freio Traseira Gol Voyage G5 G6 Saveiro 1.6 8v Frasle',
    price: 'R$ 147,00',
    priceDescount: 'R$ 155,00',
    imageSrc: ['/images/lona_De_freio.webp'],
  },
];

export default data;
