import { useSearchParams } from "react-router-dom";
import { useAdmin } from "../../../../../hooks/admin/useAdmin";
import { Title } from "../../components/Title";
import { Formulario } from "../../styles/Formulario";
import { Container } from "./styles";

export const ActiveAcount = () => {

	const { accountActive } = useAdmin();

	const [search] = useSearchParams();

	const handleActiveAccount = () => {
		accountActive.mutate({
			token: String(search.get('token'))
		})
	}

	return (
		<>
			<Container>
				<div className="container">
					<Formulario style={{ width: '100%' }}>
						<div className="content">
							<Title title="Ativar Conta" align="strat"/>
							<p>Ative sua conta para começar a usar todos os recursos. Verifique seu e-mail e siga as instruções para concluir a ativação. 🚀</p>
						</div>

						<div className="form_flex mt" style={{width: '100%'}}>
							<button type="button" className="button contain" style={{ width: '100%' }} onClick={handleActiveAccount}>
								Ative sua conta aqui
							</button>
						</div>
					</Formulario>
				</div>
			</Container>
		</>
	);
};
