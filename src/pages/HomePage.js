import {React} from 'react'
import {Container, Row, Col, Card, CardBody,CardHeader} from 'reactstrap';
import {Button} from 'react-bootstrap';

const HomePage = () => {
    return(
        <Container>
            <Row className='row-content'>
                    <Col sm='6'>
                        <h1>Welcome</h1>
                        <p>Welcome to our captivating world of abstract photography and 
                            mesmerizing videos. Immerse yourself in the realm of boundless 
                            creativity and discover the extraordinary beauty hidden within the 
                            realms of the ordinary. Our portfolio showcases an exquisite collection 
                            of captivating visuals that evoke emotions, challenge perspectives, 
                            and ignite the imagination. Each frame is a unique piece of art, 
                            meticulously crafted to transport you to a realm where reality blends 
                            with imagination. Whether you're an art enthusiast, a creative soul, 
                            or simply seeking inspiration, our abstract photos and videos will take 
                            you on a visual journey like no other. Prepare to be enchanted, 
                            inspired, and forever transformed by the power of abstract art.
                        </p>
                        <a href='./AboutPage'><Button>Our Full Story</Button></a>
                    </Col>
                    <Col sm='6'>
                        <CardHeader>
                            <h1>BEYOND THE LENS</h1>
                            <h4>The Content We Create for Our YouTube Channel</h4>
                        </CardHeader>
                        <CardBody>
                                {/* IMG tag for boostrap cards */}
                                <h4>PHOTO AND FILM MAKING TUTORIALS</h4>
                                <p>Our YouTube channel features photography and video tutorials that 
                                    are directly related to our larger production projects, giving you 
                                    an inside look at how we bring our creative vision to life.</p>
                        </CardBody>
                    </Col>
                    <Col>
                        <CardHeader>
                            <h1>OUR OTHER CREATIVE PURSUITS</h1>
                        </CardHeader>
                        <CardBody>
                            <h4>PODCAST</h4>
                            <p>From behind-the-scenes stories to honest reflections on the joys 
                                and challenges of the creative process, our show offers a candid 
                                and unfiltered glimpse into the world of video production and 
                                creative life online.</p>
                            <Button>Tuxed Time Podcast</Button>
                            
                            <h4>PHOTO CLUB</h4>
                            <p>Pixel and Lens Visuals Club is our online community built around
                                 the shared passions of photography and video. Come connect with 
                                 like-minded individuals, share your work, exchange ideas and ask 
                                 questions.</p>
                            <Button>Join Community</Button>

                            <h4>DRY GOODS</h4>
                            <p>We're passionate about creating unique home goods and apparel that 
                                reflect our love for creativity and design. Our products are carefully 
                                crafted and designed to inspire, uplift and bring joy to your daily life.</p>
                            <Button>Shop Merch</Button>
                        </CardBody>
                    </Col>
                </Row>
        </Container>
    );
}

export default HomePage;