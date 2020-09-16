import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../components/seo"

// const BattleRoyalePage = () => (
const BattleRoyalePage = class extends React.Component {

  state = {
    loading: true,
    error: false,
    fetchData: []
  }

  componentDidMount() {

    // // Replace ./data.json with your JSON feed
    // fetch('./data.json')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     // Work with JSON data here
    //     console.log(data)
    //   })
    //   .catch(err => {
    //     // Do something for an error here
    //   })

    fetch(`${process.env.FORTNITE_API_URL}`)
      .then(response => {
        // console.log(response);
        return response.json()
      }).then(json => {
         // Work with JSON data here
        console.log(json)
        this.setState({
          fetchedShop: json,
          loading: false
        })
      })
      .catch(err => {
        // Do something for an error here
      })

    // fetch('https://fortnite-api.com/v2/shop/br')
    //   .then(response => {
    //     // console.log(response);
    //     return response.json()
    //   }).then(json => {
    //     console.log(json)
    //     this.setState({
    //       fetchedShop: json,
    //       loading: false
    //     })
    //   })
  }

  render() {

    const {fetchedShop} = this.state
    console.log(fetchedShop)

    return (
    <Layout>
      <SEO title="Battle Royale" />
      <div className="fortnite_battle-royale">
        <div className="container">
          <h3><span className="backArrow"><Link to="/fortnite/">&#8592;</Link></span>Fortnite</h3>

          <h3>Battle Royale</h3>
          
          <p>Drop in to new world (PvP)</p>

          <div className="fortnite_battle-royale_shop">

            {/* fetchedShop.data.daily.entries - (c'est lui qui a plusieurs entrées) */}

            {fetchedShop && <div className="fortnite_battle-royale_shop-daily">
              <h3 className="fnFont">Special featured Shop - {fetchedShop.data.date}</h3>
            
              <div className="heroesCards">
                {
                  fetchedShop.data.specialFeatured.entries.map((entry, i) => {
                    return (
                      <div className="heroCard" key={i} data-rarity={entry.items[0].rarity.value}>
                        <div>
                          
                          {/* {entry.roles.map(function (role, i) { 
                            return <div key={i}>
                              <h5>{role.title}</h5>
                              <span>{role.startDate}</span>
                              <span>{role.location}</span>
                              <p>{role.description}</p>
                            </div>
                          })} */}

                          <img src={entry.items[0].images.icon} alt={entry.items[0].name}/>
                          
                          {/* <a href={entry.url}>
                            <img src={entry.logo} alt={entry.companyName} />
                          </a> */}

                          {/* <a href={entry.url}>{entry.companyName}</a> */}
                        </div>
                        
                        <div className="heroCard__overlay">
                          <p className="fnFont">{entry.items[0].name}</p>
                          <p>{entry.items[0].type.displayValue}</p>
                        </div>

                        <div className="heroCard__bottom">
                          <p>{entry.regularPrice}</p>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>}

            {fetchedShop && <div className="fortnite_battle-royale_shop-daily">
              <h3 className="fnFont">Featured Shop</h3>
            
              <div className="heroesCards">
                {
                  fetchedShop.data.featured.entries.map((entry, i) => {
                    return (
                      <div className="heroCard" key={i} data-rarity={entry.items[0].rarity.value}>
                        <div>
                          
                          {/* {entry.roles.map(function (role, i) { 
                            return <div key={i}>
                              <h5>{role.title}</h5>
                              <span>{role.startDate}</span>
                              <span>{role.location}</span>
                              <p>{role.description}</p>
                            </div>
                          })} */}

                          <img src={entry.items[0].images.icon} alt={entry.items[0].name}/>
                          
                          {/* <a href={entry.url}>
                            <img src={entry.logo} alt={entry.companyName} />
                          </a> */}

                          {/* <a href={entry.url}>{entry.companyName}</a> */}
                        </div>
                        
                        <div className="heroCard__overlay">
                          <p className="fnFont">{entry.items[0].name}</p>
                          <p>{entry.items[0].type.displayValue}</p>
                        </div>

                        <div className="heroCard__bottom">
                          <p>{entry.regularPrice}</p>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>}

            {fetchedShop && <div className="fortnite_battle-royale_shop-daily">
              <h3 className="fnFont">Daily Shop</h3>
            
              <div className="heroesCards">
                {
                  fetchedShop.data.daily.entries.map((entry, i) => {
                    return (
                      <div className="heroCard" key={i} data-rarity={entry.items[0].rarity.value}>
                        <div>
                          
                          {/* {entry.roles.map(function (role, i) { 
                            return <div key={i}>
                              <h5>{role.title}</h5>
                              <span>{role.startDate}</span>
                              <span>{role.location}</span>
                              <p>{role.description}</p>
                            </div>
                          })} */}

                          <img src={entry.items[0].images.icon} alt={entry.items[0].name}/>
                          
                          {/* <a href={entry.url}>
                            <img src={entry.logo} alt={entry.companyName} />
                          </a> */}

                          {/* <a href={entry.url}>{entry.companyName}</a> */}
                        </div>
                        
                        <div className="heroCard__overlay">
                          <p className="fnFont">{entry.items[0].name}</p>
                          <p>{entry.items[0].type.displayValue}</p>
                        </div>

                        <div className="heroCard__bottom">
                          <p>{entry.regularPrice}</p>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>}

            <p>data from <a href="https://fortnite-api.com/" target="_blank" rel="noopener noreferrer">fortnite-api.com</a></p>
            
            {/* <img src={fetchedShop.data.daily.entries[0].items[0].images.icon} 
                 alt={fetchedShop.data.daily.entries[0].items[0].name}
            />
          
            <p>{fetchedShop.data.daily.entries[0].items[0].name}</p>
            <p>{fetchedShop.data.daily.entries[0].items[0].type.value}</p>
          
            <p>{fetchedShop.data.daily.entries[0].finalPrice}</p> */}
               

            <div className="xxx">
                <h3>My squad</h3>
                <div className="cards">
                  <a href="https://skidip.team" rel="noopener noreferrer" target="_blank">
                    <div className="card creative">
                      <h3>SKIDIP</h3>
                    </div>
                  </a>
                </div>
                {/* <ul>
                  <li><Link to="/fortnite/save-the-world/">Save the World</Link></li>
                  <li>
                    <a className="link skidip" href="https://skidip.team" rel="noopener noreferrer" target="_blank">skidip.team</a>
                  </li>
                </ul> */}
            </div>

          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

export default BattleRoyalePage
