import Image from "next/image";
import aboutImage from "../../../public/bannerhome.jpg";
import logoR from "../../../public/logoR.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import styles from "./styles.module.css";
import { Button, Card } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";

export const SectionAbout = () => {
    return (
        <>
            <section style={{ marginTop: "30px" }} className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
                    {[{
                        count: "50",
                        text: "crianças e adolescentes atendidos diariamente",
                        borderColor: "#a2bd30"
                    }, {
                        count: "46",
                        text: "famílias atendidas em 2024",
                        borderColor: "#4970b1"
                    }, {
                        count: "+800",
                        text: "crianças atendidas desde 2004",
                        borderColor: "#a2bd30"
                    }, {
                        count: "+40.000",
                        text: "refeições servidas ao ano",
                        borderColor: "#4970b1"
                    }].map((card, index) => (
                        <div key={index} className={`${styles.slideTop} flex justify-center`}>
                            <Card.Root
                                width="full"
                                maxWidth="250px"
                                height="250px"
                                md={{maxWidth: "18rem", height: "300px"}}
                                boxShadow="0px 0px 50px -9px rgba(0,0,0,0.5)"
                                borderTop="xl"
                                borderColor={card.borderColor}
                            >
                                <Card.Body gap="2" justifyContent="center">
                                    <Card.Title textAlign="center" fontWeight="extrabold" fontSize="4xl" md={{fontSize: "6xl"}} mt="2" mb="10" color="#a2bd30">{card.count}</Card.Title>
                                    <Card.Description textAlign="center" fontSize="md" md={{fontSize: "lg"}} fontWeight="bold" color="black" lineHeight="23px">
                                        {card.text}
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex justify-center pt-5 pb-5 md:pt-16 md:pb-14 m-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex justify-center lg:justify-end">
                        <Image className="rounded-lg" src={aboutImage} alt="aboutImage" width={500} height={300} />
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <div className="flex flex-col justify-between max-w-lg text-center lg:text-left">
                            <h3 className="text-5xl lg:text-6xl font-black pb-5 md:pb-0" style={{ color: "#a2bd30" }}>Quem somos</h3>
                            <span className="text-md text-justify text-wrap text-neutral-700 font-bold">
                                A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
                            </span>
                            <Button
                                width="200px"
                                fontSize="lg"
                                bgColor="#a2bd30"
                                variant="outline"
                                size="xl"
                                color="white"
                                className="mt-4 flex items-center justify-center space-x-2"
                            >
                                <span className="font-bold">Saiba mais</span> <RiArrowRightLine />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center md:pb-48 m-5">
                <div className="grid grid-cols-1 gap-5 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div>
                            <Image className="rounded-full" src={logoR} alt="logoR" width={200} height={200} />
                        </div>
                        <div className="flex flex-col justify-between max-w-lg">
                            <h3 className="text-4xl md:text-5xl font-black pb-5 md:pb-0" style={{ color: "#4970b1" }}>E aí, vamos fazer a diferença?</h3>
                            <span className="text-sm text-justify text-wrap text-neutral-700 font-bold">
                                Com apenas <strong>R$ 1,00</strong> por dia você nos ajuda a atuar na garantia de direitos e desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade social, fazendo com que eles possam se desenvolver de forma segura e acolhedora. Vamos juntos?
                            </span>
                            <Button
                                width="180px"
                                fontSize="lg"
                                bgColor="#4970b1"
                                variant="outline"
                                size="lg"
                                color="white"
                                className="mt-4 flex items-center justify-center space-x-2"
                            >
                                <span className="font-bold">APOIE AGORA!</span> <FaHandHoldingHeart />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
