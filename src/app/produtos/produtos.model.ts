import data from '~/api/http/produtos/list';
import { ListaProduto } from '~/domain/entities/produtos';

export const useProdutosModel = () => {
  const listaProdutos: ListaProduto[] = data;

  return { listaProdutos };
};
