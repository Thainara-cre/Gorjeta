import {TotalContainer, GorjetaContainer, ResultadoContainer, GorjetaTotalContainer } from './Resultados.styles' 


export function Resultados ({total, gorgeta, limpar}) {
  return (
    <ResultadoContainer>
                <GorjetaTotalContainer>
                    <GorjetaContainer>
                        <p>
                            Gorjeta <br />
                            <span>
                                / pessoa
                            </span>
                        </p>
                        <p>R$ {gorgeta.toFixed(2)}</p>
                    </GorjetaContainer>
                </GorjetaTotalContainer>
                <TotalContainer>
                    <p>
                        Total <br />
                        <span>
                            / pessoa
                        </span> 
                    </p>
                    <p>R$ {total.toFixed(2)}</p>
                </TotalContainer>
                <button onClick={limpar}>Limpar</button>
            </ResultadoContainer>
  )
}

