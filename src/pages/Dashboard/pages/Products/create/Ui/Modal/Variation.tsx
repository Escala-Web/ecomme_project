import { useState } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
} from "@mui/material";

import { Formulario } from "../../styles";
import { useVariation } from "../../../../../../../hooks/Variation/useVariation";
import { Title } from "../../../../../components/Title";

export const ModalVariation = () => {
	const [open, setOpen] = useState(false);
	const [variationName, setVariationName] = useState<string>("");

	const colorOptions = [
		{ english: "red", portuguese: "Vermelho" },
		{ english: "green", portuguese: "Verde" },
		{ english: "blue", portuguese: "Azul" },
		{ english: "yellow", portuguese: "Amarelo" },
		{ english: "black", portuguese: "Preto" },
		{ english: "white", portuguese: "Branco" },
		{ english: "orange", portuguese: "Laranja" },
		{ english: "purple", portuguese: "Roxo" },
		{ english: "pink", portuguese: "Rosa" },
		{ english: "gray", portuguese: "Cinza" },
	];

	const { createVariation, findAllVariation } = useVariation();
	const { data } = findAllVariation;

	// Função para abrir o modal
	const handleOpen = () => {
		setOpen(true);
	};

	// Função para fechar o modal
	const handleClose = () => {
		setOpen(false);
	};

	// Função de envio da variação
	const handleSubmitVariations = () => {
		createVariation.mutate({
			name: variationName,
		});
		handleClose();
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleOpen}>
				Adicionar variação
			</Button>

			<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
				<DialogContent>
					<Title title="Adicionar variação de produto" />
					<p style={{ marginTop: "16px", marginBottom: "16px" }}>
						Você poderá gerenciar preço e estoque para esta opção de produto
						mais tarde.
					</p>

					<Formulario>
						<div className="form_group mt-3">
							<div className="form_flex">
								<div className="form_group">
									<label>Nome da variação</label>
									<input
										type="text"
										style={{ color: "#333" }}
										value={variationName} // Controlando o valor de variação
										onChange={(e) => setVariationName(e.target.value)} // Atualizando o valor do estado
										placeholder="Nome do produto"
										className="input" // Usar uma classe para estilização se necessário
									/>
								</div>
								<div className="form_group">
								<button
									
									color="primary"
									onClick={handleSubmitVariations}
								>
									Cadastrar
								</button>
								</div>
							</div>
						</div>
					</Formulario>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Fechar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
