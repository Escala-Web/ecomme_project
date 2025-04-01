import React, { useState } from "react";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { FileManager } from "../../../components/FileManager";
import { Title } from "../../../components/Title";
import { Aside, Container, Formulario, MainContent } from "./styles";
import { Badge, Button, Divider, IconButton } from "@mui/material";
import { ModalVariation } from "./Ui/Modal/Variation";
import { useVariation } from "../../../../../hooks/Variation/useVariation";
import DeleteIcon from "@mui/icons-material/Delete";
import { useBread } from "../../../../../hooks/Bread/useBread";
import { toast } from "react-toastify";
import { useCategory } from "../../../../../hooks/Category/useCategory";

// Tipos de dados
interface Media {
	id_media: number;
	position: number;
	is_main: boolean;
}

interface Variation {
	sku: string;
	price: string;
	stock: number;
	is_default: boolean;
	discount: string;
	value_variant: string | null;
	pictures: Media[];
}

interface ProductFormData {
	id_category: number;
	name: string;
	description: string;
	id_brand: number;
	variations: Variation[];
}

export const ProductsCreate = () => {
	const [idBread, setIdBread] = useState<number>(1); // Estado para o ID da marca selecionada
	const [category, setCategory] = useState<string>("");
	const [productData, setProductData] = useState<ProductFormData>({
		id_category: 2,
		name: "",
		description: "",
		id_brand: idBread, // Inicialmente, o id_brand é o valor do estado idBread
		variations: [
			{
				sku: "",
				price: "",
				stock: 0,
				is_default: true,
				discount: "",
				value_variant: null,
				pictures: [],
			},
		],
	});

	const [isBread, setIsBread] = useState(false);
	const [bread, setBread] = useState<string>();

	const toggleBread = () => {
		setIsBread(!isBread);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index?: number
	) => {
		const { name, value } = e.target;
		if (index !== undefined) {
			const updatedVariations = [...productData.variations];
			updatedVariations[index][name as keyof Variation] = value;
			setProductData((prevData) => ({
				...prevData,
				variations: updatedVariations,
			}));
		} else {
			setProductData((prevData) => ({ ...prevData, [name]: value }));
		}
	};

	const handleAddVariation = () => {
		setProductData((prevData) => ({
			...prevData,
			variations: [
				...prevData.variations,
				{
					sku: "",
					price: "",
					stock: 0,
					is_default: false,
					discount: "",
					value_variant: null,
					pictures: [],
				},
			],
		}));
	};

	const { findAllVariation } = useVariation();

	const handleBackVariation = () => {
		setProductData((prevData) => ({
			...prevData,
			variations: prevData.variations.slice(0, prevData.variations.length - 1),
		}));
	};

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		// Aqui, antes de enviar o formulário, asseguramos que id_brand está com o valor correto
		setProductData((prevData) => ({
			...prevData,
			id_brand: idBread,
		}));

		console.log(productData); // Agora o id_brand está sendo enviado corretamente
	}

	const { create, findAll: breadsAll, deleteBrands } = useBread();

	const handleCreateBread = () => {
		if (bread?.length === 0) {
			toast.error("O campo marca não pode ser vazio");
		}

		create.mutate({
			name: String(bread),
		});

		if (!create.isPending) {
			setIsBread(false);
		}
	};

	const handleDeleteBreand = (id: number) => {
		deleteBrands.mutate({
			id: id,
		});
	};

	// Category

	const [isCategory, setIsCategory] = useState(false);
	const [nameCategory, setNameCategory] = useState("");
	const [descriptionCategory, setDescriptionCategory] = useState("");

	const { createCategory } = useCategory();

	const toggleCategory = () => {
		setIsCategory(!isCategory);
	};

	const handleCreateCategory = () => {
		createCategory.mutate({
			name: nameCategory,
			parent_category: null,
		});
	};

	return (
		<>
			<Breadcrumb title="Cadastrar Produto" />
			<Formulario onSubmit={handleSubmit}>
				<Container>
					<div className="content">
						<div className="container mt-2">
							<Title title="Adicionar imagem" />
							<FileManager />
						</div>
						<div className="container">
							<Title title="Informações do produto" />
							<div className="form_flex mt-2">
								<div className="form_group">
									<label htmlFor="name">Nome</label>
									<input
										type="text"
										name="name"
										value={productData.name}
										onChange={handleInputChange}
									/>
								</div>
							</div>
							<div className="form_group">
								<label htmlFor="description">Descrição Detalhada</label>
								<textarea
									name="description"
									cols={5}
									rows={8}
									value={productData.description}
									onChange={handleInputChange}
								></textarea>
							</div>
						</div>

						<div className="container">
							<Title title="Adicionar variação de produto" />
							<p className="variation_description">
								Você poderá gerenciar preço e estoque para esta opção de produto
								mais tarde.{" "}
							</p>

							<div className="mt-2">
								<ModalVariation />
							</div>
						</div>

						<div className="container">
							{productData.variations.map((variation, index) => (
								<div key={index} className="variation_group">
									<Title
										title={
											productData?.variations?.length > 0
												? "Produtos"
												: "Variação" + index + 1
										}
									/>
									<h4 className="mt-1"></h4>
									<div className="form_group">
										<label htmlFor={`sku-${index}`}>SKU</label>
										<input
											type="text"
											name="sku"
											value={variation.sku}
											onChange={(e) => handleInputChange(e, index)}
										/>
									</div>
									<div className="form_group">
										<label htmlFor={`price-${index}`}>Preço</label>
										<input
											type="text"
											name="price"
											value={variation.price}
											onChange={(e) => handleInputChange(e, index)}
										/>
									</div>
									<div className="form_group">
										<label htmlFor={`stock-${index}`}>Estoque</label>
										<input
											type="number"
											name="stock"
											value={variation.stock}
											onChange={(e) => handleInputChange(e, index)}
										/>
									</div>
									<div className="form_group">
										<label htmlFor={`discount-${index}`}>Desconto</label>
										<input
											type="text"
											name="discount"
											value={variation.discount}
											onChange={(e) => handleInputChange(e, index)}
										/>
									</div>
									<div className="form_group">
										<label htmlFor={`value_variant-${index}`}>
											Valor Variante
										</label>
										<select name="" id="">
											{findAllVariation?.data?.content?.map((item) => (
												<option
													key={item.id_variant_attribute}
													value={item.id_variant_attribute}
												>
													{item.name}
												</option>
											))}
										</select>
									</div>
									<div className="form_group">
										<label htmlFor={`is_default-${index}`}>É Padrão</label>
										<input
											type="checkbox"
											name="is_default"
											checked={variation.is_default}
											onChange={(e) => handleInputChange(e, index)}
										/>
									</div>
									<Divider />
									<br />
								</div>
							))}
							<Button
								variant="contained"
								type="button"
								onClick={handleAddVariation}
							>
								Adicionar Variação
							</Button>
							<Button type="button" onClick={handleBackVariation}>
								Voltar
							</Button>
						</div>
					</div>

					<Aside>
						<div className="container mt-2">
							<Title title="Marcas" />
							<div className="form_group mt-1">
								{breadsAll?.data?.content?.map((item) => (
									<div key={item.id_brand} className="form_flex">
										<div>
											<input
												type="radio"
												id={item?.id_brand || "defaultId"}
												name="id_brand"
												value={item?.id_brand}
												onChange={() => setIdBread(item?.id_brand)} // Atualiza idBread ao selecionar uma marca
											/>
											<label
												htmlFor={item?.id_brand}
												style={{ marginLeft: "4px" }}
											>
												{item.name}
											</label>
										</div>
										<IconButton
											aria-label="delete"
											onClick={() => handleDeleteBreand(item.id_brand)}
										>
											<Badge
												sx={{ borderRadius: "50%", border: "none" }}
												color="secondary"
											>
												<DeleteIcon sx={{ fontSize: "20px" }} />
											</Badge>
										</IconButton>
									</div>
								))}

								{isBread && (
									<div className="form_flex mt-2">
										<div className="form_group">
											<label htmlFor="">Nome da marca</label>
											<input
												type="text"
												placeholder="Nome da marca"
												value={bread}
												onChange={(event) => setBread(event.target.value)}
												name="breadadd"
											/>
										</div>
										<div className="form_group">
											<label htmlFor="" style={{ color: "#fff" }}></label>
											<button onClick={handleCreateBread} className="button">
												{create.isPending ? "Carregando" : "Adicionar marca"}
											</button>
										</div>
									</div>
								)}
								<div className="form_group mt-2">
									<Button onClick={toggleBread}>
										{isBread ? "Cancelar" : "Adicionar marca"}
									</Button>
								</div>
							</div>
						</div>

						{/* <div className="container">
							<Title title="Categorias" />
							<div className="form_group mt-1">
								{breadsAll?.data?.content?.map((item) => (
									<div key={item.id_brand} className="form_flex">
										<div>
											<input
												type="radio"
												id={item?.id_brand || "defaultId"}
												name="id_brand"
												value={item?.id_brand}
												onChange={() => setIdBread(item?.id_brand)} // Atualiza idBread ao selecionar uma marca
											/>
											<label
												htmlFor={item?.id_brand}
												style={{ marginLeft: "4px" }}
											>
												{item.name}
											</label>
										</div>
										<IconButton
											aria-label="delete"
											onClick={() => handleDeleteBreand(item.id_brand)}
										>
											<Badge
												sx={{ borderRadius: "50%", border: "none" }}
												color="secondary"
											>
												<DeleteIcon sx={{ fontSize: "20px" }} />
											</Badge>
										</IconButton>
									</div>
								))}

								{isCategory && (
									<div className="form_flex">
										<div className="form_group">
											<label htmlFor="">Nome da categoria</label>
											<input
												type="text"
												placeholder="Nome da categoria"
												value={nameCategory}
												onChange={(event) =>
													setNameCategory(event.target.value)
												}
											/>
										</div>
										<div className="form_group">
											<label htmlFor="" style={{ color: "#fff" }}>
												s
											</label>
											<button className="button" onClick={handleCreateCategory}>
												Adicionar Categoria
											</button>
										</div>
									</div>
								)}

								<div className="form_group mt-2">
									<Button onClick={toggleCategory}>
										{isCategory ? "Cancelar" : "Adicionar Categoria"}
									</Button>
								</div>
							</div>
						</div> */}
					</Aside>
				</Container>
				<Container>
					<div className="mt-1">
						<Button type="submit" variant="contained">
							Cadastrar Produto
						</Button>
					</div>
				</Container>
			</Formulario>
		</>
	);
};
