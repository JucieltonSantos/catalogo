import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("Renderiza o componente com o children", () => {
    render(<Button>Clique</Button>);
    expect(screen.getByText("Clique")).toBeInTheDocument();
  });

  it("Função onclick", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique</Button>);
    fireEvent.click(screen.getByText("Clique"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("Button snapshot", () => {
  it("Verifica o snapshot", () => {
    const { container } = render(
      <Button className="buttonTeste">Clique</Button>
    );
    expect(container).toMatchSnapshot();
  });
});
