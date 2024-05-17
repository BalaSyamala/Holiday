import Services from "./Services";
import "./App.css";

function App() {
  return (
    <div
    style={{display:"flex" , flexWrap:"wrap" , gap:"20px"}}
      className="App"
    >
      <Services
        img="https://www.irctc.co.in/nget/assets/images/exterior.jpg"
        alt="Maharajas Express"
        h="Mharajas Express"
        p="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World "
        Link="https://www.the-maharajas.com/"
        t="ReadMore ->"
      ></Services>
      <Services
        img="https://www.irctc.co.in/nget/assets/images/Thailand.jpg"
        alt="International Packages"
        h="International Packages"
        p="Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience. "
        Link="https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All"
        t="ReadMore ->"
      ></Services>
      <Services
        img="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg"
        alt="Domestic Air Packages"
        h="Domestic Air Packages"
        p="Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"
        Link="https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All"
        t="ReadMore ->"
      ></Services>
      <Services
        img="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg"
        alt="Bharat Gaurav Tourist Train"
        h="Bharat Gaurav Tourist Train"
        p="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage. "
        Link="https://www.irctctourism.com/bharatgaurav"
        t="ReadMore ->"
      ></Services>
      <Services
        img="https://www.irctc.co.in/nget/assets/images/Manali.jpg"
        alt="Rail Tour Packages"
        h="Rail Tour Packages"
        p="IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available. "
        Link="https://www.irctctourism.com/#/tourpkgs"
        t="ReadMore ->"
      ></Services>
    </div>
  );
}

export default App;
