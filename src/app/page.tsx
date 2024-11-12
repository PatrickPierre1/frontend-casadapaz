import { Banner } from "@/components/Banner";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionAction } from "@/components/SectionAction";

export default function Home() {
	return (
		<>
			<div>
				
				<Banner />
				<SectionAbout />
				<SectionAction />
				
			</div>
		</>
	);
}
