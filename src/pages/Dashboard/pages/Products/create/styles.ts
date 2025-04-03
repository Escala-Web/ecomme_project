import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: start;

	/* flex-direction: column; */

	gap: 0.5rem;
	padding: 0 0rem;

	width: 100%;

	/* margin-top: 1rem; */

	z-index: 9699999;

	.content {
		/* background-color: aqua; */
		width: 68%;

		display: flex;
		align-items: center;
		flex-direction: column;

		gap: 1rem 0;
	}

	.container {
		/* margin-top: 1rem; */

		width: 99%;
		background-color: #fff;

		border: 1px solid #ccc;

		padding: 1rem;
		border-radius: 6px;
		box-shadow: 0 0 6px #2c2c2c24;
	}

	.mt-2 {
		margin-top: 2rem;
	}

	.mt-1 {
		margin-top: 1rem;
	}

	.variation_description {
		font-size: 14px;
		margin-top: 0.6rem;
		color: #222;
	}
`;

export const MainContent = styled.form`
	width: 70%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.container {
		display: flex;
		align-items: center;

		flex-wrap: wrap;
		gap: 1rem;
	}

	.container_card_image {
		width: 100px;
		height: 100px;

		border-radius: 6px;
		border: 1px solid #ccc;
		overflow: hidden;
		padding: 0.3rem;

		position: relative;

		img {
			width: 100%;
		}

		svg {
			cursor: pointer;

			position: absolute;
			top: 0;
			right: 0;
			font-size: 22px;

			color: red;
		}
	}

	.container-registrar {
		display: flex;
		align-items: center;

		gap: 1rem;

		padding: 1rem 2rem;
		background-color: #fff;

		margin-bottom: 4rem;
		border-radius: 8px;

		button {
			/* background-color:rgb(15, 143, 241); */
			padding: 0.6rem;
			width: 30%;

			border-radius: 6px;
			border: 1px solid transparent;

			color: #fff;

			cursor: pointer;
		}

		.cancelar {
			background-color: red;
			padding: 0.6rem;
			width: 30%;

			border-radius: 6px;
			border: none;

			color: #fff;

			text-align: center;
			text-decoration: none;
		}
	}

	.container_variants_values {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		margin: 0.8rem 0 0.6rem;
	}

	.container_variant {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f4f4f4;

		padding: 0.6rem 1rem;
		border-radius: 8px;
	}
`;

export const Aside = styled.aside`
	width: 30%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	background-color: transparent;

	/* background-color: aqua; */
`;

export const PriceDescont = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
`;

export const PromocionDiscont = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	margin-top: 2rem;
`;

export const Formulario = styled.form`

	background-color: transparent;



	.variation_group {
		position: relative;
	}

	.form_group {
		margin-bottom: 1rem;

		width: 100%;

		display: flex;
		flex-direction: column;

		gap: 0.2rem;

		p {
			color: rgb(64, 64, 64);
			font-size: 15px;
			font-weight: 00;
		}

		label {
			color: #333;
			font-size: 14px;
			font-weight: 400;
		}

		input {
			padding: 0.8rem 1rem;
			border: 1px solid #ccc;

			border-radius: 4px;

			outline: 0;

			&:focus {
				border: 2px solid #1976d2;
			}
		}

		button {
			padding: 0.4rem 1rem;

			border: 1px solid #ccc;
			border-radius: 4px;
			outline: 0;

			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: center;

			gap: 0.4rem;
		}

		select {
			padding: 0.8rem 1rem;
			border: 1px solid #ccc;

			border-radius: 4px;

			outline: 0;

			&:focus {
				border: 2px solid #1976d2;
			}
		}
	}

	.select-color span {
		margin-bottom: 5px;
	}

	.select-color p {
		margin-top: 5px;
	}

	.container_action {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 0.2rem;
	}

	.list_variation {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		.container_content {
			display: flex;
			align-items: center;

			p {
				width: 200px;

				color: #333;
				font-size: 14px;
				font-weight: 600;

				opacity: 0.8;
			}
		}

		li {
			padding: 1rem 0;

			border-bottom: 1px solid #f3f3f3;
			border-top: 1px solid #f3f3f3;
			display: flex;
			align-items: center;
			justify-content: space-between;

			span {
				color: #333;
				font-size: 14px;
				font-weight: 400;

				text-transform: uppercase;
				opacity: 0.8;
			}
		}
	}

	.color {
		width: 20px;
		height: 20px;

		border-radius: 50%;

		margin-left: 10px;

		gap: 0.2rem;
	}

	.container_color {
		display: flex;
		align-items: center;
		justify-content: start;
		/* gap: 1em; */

		gap: 0.2rem;
	}

	.form_radio {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		width: 100%;

		label {
			color: #333;
			font-size: 14px;
			font-weight: 400;
		}
	}

	.container_card_image {
		width: 90px;

		border: 1px solid #ccc;
		padding: 6px;

		border-radius: 4px;
		position: relative;

		svg {
			position: absolute;
			color: red;
			top: -10px;
			font-size: 22px;
		}

		img {
			width: 100%;
		}
	}

	.title {
		color: #333;
		font-size: 20px;

		font-weight: 400;
	}

	.form_flex {
		display: flex;
		align-items: center;
		justify-content: space-between;

		gap: 1rem;

		width: 100%;
	}

	.button {
		padding: 0.6rem 2rem;

		display: flex;
		align-items: center;

		gap: 0.4rem;

		background-color: rgb(60, 148, 243);

		color: #ffffff;
		border-radius: 8px;
		border: 1px solid transparent;
		transition: 0.2s;

		cursor: pointer;

		&:hover {
			transform: scale(1.04);
		}

		p {
			font-size: 16px;
			font-weight: 400;
		}

		svg {
			font-size: 14px;
		}
	}

	.container_images {
		margin-top: 1rem;
	}
`;

export const ContainerModal = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;

	.container_image {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		flex-wrap: wrap;

		img {
			width: 60px;
			height: 60px;

			object-fit: cover;
		}
	}

	.header {
		display: flex;
		flex-direction: column;

		gap: 0.2rem;

		h3 {
			font-weight: 500;
			font-size: 26px;

			color: #333;
		}

		p {
			font-size: 15px;
			font-weight: 400;

			color: #333;
		}
	}

	.content {
		margin-top: 1.6rem;
	}

	.container_header {
		display: flex;
		align-items: start;
		justify-content: space-between;

		flex-direction: column;
	}

	.variation-option-icon {
		display: inline-block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 10px; /* Espaciamento entre o ícone e o nome da opção */
	}
`;

export const FormularioRadio = styled.div`
	.border {
		border-bottom: 1px solid #ccc;
		padding-bottom: 0.6rem;
	}

	.container_filter {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.mt {
		margin-top: 0.8rem;
	}

	.title {
		font-size: 30px;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.text_primary};
	}

	.container_form {
		display: flex;
		flex-direction: column;

		gap: 0.4rem;
	}

	.form_grup {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		label {
			color: ${({ theme }) => theme.colors.text_primary};
			font-size: 14px;
			font-weight: 400;

			text-transform: capitalize;
		}
	}

	.children {
		/* background-color: aqua; */
		margin-left: 6px;

		border-left: 1px solid #ccc;
		padding-left: 1rem;

		margin-bottom: 6px;
	}

	.input_radio {
		border-radius: 1px;
	}
`;

export const ContainerVariations = styled.div`
	/* background-color: aqua; */
	margin-top: 1rem;
`;
