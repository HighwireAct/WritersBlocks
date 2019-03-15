import React, { Component } from "react";
import ReadCard from "../components/ReadCard";
import { Container, Row } from "../components/Grid";

class BrowseRead extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <ReadCard newblocklink={"/read/6"} title={"Over Hump Day"} previewtext={"Wednesday's court filing notes that since the preliminary injunction was issued, the government has worked with a steering committee regarding the status of deported parents who have children remaining in federal care. The ACLU helped lead the committee, which reached out to all the parents who had been deported."} wordcount={375} contributorcount={5} />
                    <ReadCard newblocklink={"/read/7"} title={"Big Trouble in Little Italy"} previewtext={"Cynthia is one of the most popular singers and songwriters. Her first album, Goodies, topped the charts and earned Cynthia love, recognition, and support from her fans all over the world. Before she found the love of her life, Cynthia had a secret life. One of deep depression and heavy drug use. Well, at least she was happy."} wordcount={301} contributorcount={5} />
                    <ReadCard newblocklink={"/read/8"} title={"Lucky Joy Coffee"} previewtext={"Yet few seem to know exactly why these tiny fictions have become popular, or even what they are. Are they an Internet fad? Are they short because TV and Twitter have shrunk our attention spans? If they are, Julian Gough, a highly awarded Irish novelist living in Germany, thinks it may be a good thing."} wordcount={404} contributorcount={5} />
                    <ReadCard newblocklink={"/read/9"} title={"It's 2:15 Somewhere"} previewtext={"What if you opened a fortune cookie and found a tiny map inside? Would you have the courage to follow the unknown secrets on the tiny piece of paper? Or would you toss it on your plate as fast as the extra fat piece of lard on your sweet and sour pork?"} wordcount={101} contributorcount={5} />
                    <ReadCard newblocklink={"/read/10"} title={"Just My Luck!"} previewtext={"What if you picked up the wrong suitcase at the airport, and inside it was the evidence from a crime? What if you didn't have a choice because you got caught with it. Your fingerprints are now on a damn hard piece of evidence and things are not looking good for you at all. You're screwed. Your momma knows it too!"} wordcount={65} contributorcount={5} />
                </Row>
            </Container>
            </>
        )
    }
}

export default BrowseRead;