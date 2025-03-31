import { useEffect, useState } from "react";
import { Container, Section } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react"; // Importação correta do Swiper
import { Navigation, Pagination, A11y } from "swiper/modules"; // Importação dos módulos
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const Banner = () => {
	const defaultBanner = [
		{
			image:
				"https://mir-s3-cdn-cf.behance.net/project_modules/1400/371cef178509439.64e8f951aab97.jpg",
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n2m61wSsm_oTQdkcPrf1FMVyxYQ2eOEE0g&s",
		},
	];

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Container>
			<Section w="100%">
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					style={{ width: "100%", height: isMobile ? "400px" : "620px" }}
				>
					{defaultBanner.map((b, index) => (
						<SwiperSlide key={index}>
							<img
								style={{
									width: "100%",
									height: isMobile ? "400px" : "620px",
									objectFit: "cover",
								}}
								className="swiper-image"
								src={b.image}
								alt={`banner ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Section>
		</Container>
	);
};
