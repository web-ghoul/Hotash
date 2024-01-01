import React from "react";
import Logo from "../../components/Logo";
import data from "../../data/supports/overview.json";
import { Anchor, Box, Image, Heading, Section, Text } from "../../components/elements";
import { Container, Row, Col } from "react-bootstrap";

export default function Overview() {
    return (
        <Box className="mc-overview">
            <Section className="mc-overview-banner">
                <Container>
                    <Logo href="/" src={ data?.banner.logo } alt="logo" name="hotash" className="lg" />
                    <Heading as="h1">{ data?.banner.title }</Heading>
                    <Text>{ data?.banner.descrip }</Text>
                    <Box className="tools">
                        <Heading>{ data?.banner.subtitle }</Heading>
                        {data?.tools.map((tool, index) => (
                            <Image key={ index } src={ tool } alt="tools" />
                        ))}
                    </Box>
                    <Anchor 
                        href="/ecommerce" 
                        target="_blank" 
                        icon="launch" 
                        text="explore now" 
                        rel="noopener noreferrer"
                        className="mc-btn primary"
                    />
                </Container>
            </Section>
            <Section className="mc-overview-demo">
                <Container fluid>
                    <Heading as="h2" className="mc-overview-title">unique pages</Heading>
                    <Row xs={1} sm={2} xl={3}>
                        {data?.demos.map((demo, index) => (
                            <Col key={index} >
                                <Box className="mc-overview-card">
                                    <Box className="mc-overview-media">
                                        <Image src={demo.image} alt="demo" />
                                        <Box className="mc-overview-overlay">
                                            <Anchor href={demo.path} target="_blank" rel="noopener noreferrer" className="mc-overview-link">live preview</Anchor>
                                        </Box>
                                    </Box>
                                    <Heading className="mc-overview-name">{demo.title}</Heading>
                                </Box>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>
            <Section className="mc-overview-footer">
                <Heading as="h2">Do you want to inquiry about hotash template?</Heading>
                <a 
                    href="https://themeforest.net/item/hotash-react-admin-dashboard-template/40188968/support" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mc-btn primary" 
                >
                    <i className="material-icons">forum</i>
                    <span>contact us</span>
                </a>
                <Text>Hotash | © Copyrights by <Text as="span">Mironcoder</Text></Text>
            </Section>
        </Box>
    )
}