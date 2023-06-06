import Cifrao from "../assets/cifrao.png";
import Pessoa from "../assets/pessoa.png";
import {Resultados} from "./Resultados";

import { PessoasContainer, PorcentagemContainer, ButtonsContainer, ContaContainer, InputContainer, Label, MainContainer} from "./Calculadora.styles";

import { useState } from "react";

export function Calculadora() {

    const [conta, setConta] = useState(0);
    const [pessoas, setPessoas] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0);
    //const [gorgeta, setGorgeta] = useState(0);
    //const [total, setTotal] = useState(0);
    let gorgeta = 0
    let total = 0

    function handleMudarValorConta(event) {
        setConta(event.target.valueAsNumber);
    }

    function handleMudarQuantidadePessoas(event) {
        setPessoas(event.target.value == "" ? 0 : event.target.valueAsNumber);
    }

    if(conta != 0 && pessoas != 0 && porcentagem != 0) {
        gorgeta = conta * porcentagem / 100 / pessoas;
        total =  conta / pessoas + gorgeta;
    }

    function handleLimpar() {
        setConta(0);
        setPessoas(0);
        setPorcentagem(0);
    }

    return (
        <MainContainer>
            <form action="">
                <ContaContainer>
                    <Label htmlFor="bill">Conta</Label>
                    <InputContainer>
                        <img src={Cifrao} alt="cifrão" />
                        <input type="number" value={conta == 0 ? "" : conta} name="" id="bill"  placeholder="0" onChange={handleMudarValorConta}/>
                    </InputContainer>
                </ContaContainer>

                <PorcentagemContainer>
                    <Label htmlFor="custom-tip">Selecione a Porcentagem</Label>
                    <ButtonsContainer>
                        <input type="button" value="5%" className={porcentagem == 5 && "selected"} onClick={() => { setPorcentagem(5)}} />
                        <input type="button" value="10%" className={porcentagem == 10 && "selected"} onClick={() => { setPorcentagem(10) }} />
                        <input type="button" value="15%" className={porcentagem == 15 && "selected"} onClick={() => { setPorcentagem(15) }} />
                        <input type="button" value="25%" className={porcentagem == 25 && "selected"} onClick={() => { setPorcentagem(25) }} />
                        <input type="button" value="50%" className={porcentagem == 50 && "selected"} onClick={() => { setPorcentagem(50) }} />
                        <input type="number" name="" id="custom-tip" placeholder="Outro" onChange={(event) => {setPorcentagem(event.target.valueAsNumber)}} value={porcentagem == 0 ? "" : porcentagem} />
                    </ButtonsContainer>
                </PorcentagemContainer>

                <PessoasContainer>
                <Label htmlFor="people">Número de Pessoas</Label>
                    <InputContainer>
                        <img src={Pessoa} alt="pessoa" />
                        <input type="number" name="" value={pessoas  == 0 ? "" : pessoas} id="people"  placeholder="0" onChange={handleMudarQuantidadePessoas}/>
                    </InputContainer>
                </PessoasContainer>
            </form>

            <Resultados total={total} gorgeta={gorgeta} limpar={handleLimpar} />
        </MainContainer>
    )
}