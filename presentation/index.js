// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  js: require("../assets/js.png"),
  onestyle: require("../assets/onestyle.png"),
  apostrophe: require("../assets/apostrophe.png"),
  semicolon: require("../assets/semicolon.png"),
  installstandard: require("../assets/installstandard.png"),
  standardscript: require("../assets/standardscript.png"),
  terminalissues: require("../assets/terminalissues.png"),
  snazzy: require("../assets/snazzy.png"),
  snazzyscript: require("../assets/snazzyscript.png"),
  snazzify: require("../assets/snazzify.png"),
  fixscript: require("../assets/fixscript.png"),
  glitter: require("../assets/glitter.jpg"),
  golumn: require("../assets/golumn.jpg"),
  battle: require("../assets/battle.jpg"),
  LOR: require("../assets/LOR2.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#E7A822",
  quartenary: "#CECECE",
  fifth: "#16838D",
  yellow: "#E7C722"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" bgImage={images.LOR} bgDarken={0.6}>
          <Heading size={1} fit caps lineHeight={1} textColor="yellow">
            JavaScript Standard Style
          </Heading>
          <Image display="block" height={50} src={images.onestyle}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Background</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="fifth" caps>The Rules</Heading>
          <List>
            <ListItem>Single quotes for strings</ListItem>
            <ListItem>2 spaces for indentation</ListItem>
            <ListItem>Space after function name</ListItem>
            <ListItem>No semicolons</ListItem>
            <ListItem>Never start a line with (, [, or `</ListItem>
            <ListItem>No unused variables</ListItem>
            <Text textColor="white">No unused variabless<Image height={140} src={images.semicolon}/><Image height={200} src={images.apostrophe}/></Text>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>Avantages</Heading>
          <Heading size={4} textColor="secondary">Why you should use it</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" bgImage={images.golumn} bgDarken={0.7}>
          <Heading size={3} textColor="tertiary" padding="15px" caps>We wants it</Heading>
          <Text size={5} textColor="tertiary" padding="15px">Step 1: Install</Text>
          <Image display="block" height={70} src={images.installstandard}/>
          <Text size={5} textColor="tertiary" padding="15px">Step 2: Add a script</Text>
          <Image display="block" height={80} src={images.standardscript}/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.battle} bgDarken={0.4}>
          <Heading size={3} textColor="primary" padding="15px" caps>First results</Heading>
          <Image display="block" height={350} src={images.terminalissues} padding="15px"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.glitter} bgDarken={0.4}>
          <Heading size={3} textColor="primary" padding="15px" caps>Make it snazzy</Heading>
          <Image display="block" height={90} src={images.snazzy} padding="15px"/>
          <Image display="block" height={100} src={images.snazzyscript} padding="15px"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.glitter} bgDarken={0.4}>
          <Heading size={3} textColor="primary" padding="10px" caps>Make it snazzy</Heading>
          <Image display="block" height={500} src={images.snazzify}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" padding="10px" caps>There's no time</Heading>
          <Heading size={4} textColor="secondary" padding="10px">Quick, fix my code</Heading>
          <Image display="block" height={100} padding="10px" src={images.fixscript}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>“I have found that it is the small things... that keep the darkness at bay."</Quote>
            <Cite>J.R.R. Tolkien</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}

// <Text margin="10px 0 0" textColor="tertiary" size={5} bold>
//   One Style to Rule Them All
// </Text>
