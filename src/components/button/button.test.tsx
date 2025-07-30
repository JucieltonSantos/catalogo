import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('Renderiza o componente com o children', () => {
    render(<Button>Clique button</Button>);
    expect(screen.getByText('Clique button')).toBeInTheDocument();
  });

  it('Função onclick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique button</Button>);
    fireEvent.click(screen.getByText('Clique button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Button snapshot', () => {
  it('Verifica o snapshot', () => {
    const { container } = render(<Button className="buttonTeste">Clique button</Button>);
    expect(container).toMatchSnapshot();
  });
});
