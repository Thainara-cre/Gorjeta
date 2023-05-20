import Cifrao from "../assets/cifrao.png";
import Pessoa from "../assets/pessoa.png";

import {TotalContainer, GorjetaContainer, ResultadoContainer, PessoasContainer, PorcentagemContainer, ButtonsContainer, ContaContainer, InputContainer, Label, MainContainer, GorjetaTotalContainer } from "./Calculadora.styles";

export function Calculadora() {
    return (
        <MainContainer>
            <form action="">
                <ContaContainer>
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={Cifrao} alt="cifrão" />
                        <input type="number" name="" id="bill"  placeholder="0"/>
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a Porcentagem</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%" />
                        <input type="button" value="10%" />
                        <input type="button" value="15%" />
                        <input type="button" value="25%" />
                        <input type="button" value="50%" />
                        <input type="number" name="" id="custom-tip" placeholder="Outro" />
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                <Label htmlFor="people">Número de Pessoas</Label>
                    <InputContainer>
                        <img src={Pessoa} alt="pessoa" />
                        <input type="number" name="" id="people"  placeholder="0"/>
                    </InputContainer>
                </PessoasContainer>
            </form>

            <ResultadoContainer>
                <GorjetaTotalContainer>
                    <GorjetaContainer>
                        <p>
                            Gorjeta <br />
                            <span>
                                / pessoa
                            </span>
                        </p>
                        <p>R$ 0.00</p>
                    </GorjetaContainer>
                </GorjetaTotalContainer>
                <TotalContainer>
                    <p>
                        Total <br />
                        <span>
                            / pessoa
                        </span> 
                    </p>
                    <p>R$ 0.00</p>
                </TotalContainer>
                <button>Limpar</button>
            </ResultadoContainer>
        </MainContainer>
    )
}