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
    fetch('https://fortnite-api.com/v2/shop/br')
      .then(response => {
        // console.log(response);
        return response.json()
      }).then(json => {
        console.log(json)
        this.setState({
          fetchedShop: json,
          loading: false
        })
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
            <h3>Daily Shop</h3>
            <div className="heroesCards">
            {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.daily.entries[0].items[0].rarity.value}>
                <div>
                  <img src={fetchedShop.data.daily.entries[0].items[0].images.icon} alt={fetchedShop.data.daily.entries[0].items[0].name}/>
                </div>

                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.daily.entries[0].items[0].name}</p>
                  <p>{fetchedShop.data.daily.entries[0].items[0].type.value}</p>
                </div>

                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.daily.entries[0].finalPrice}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.daily.entries[1].items[0].rarity.value}>
                <img src={fetchedShop.data.daily.entries[1].items[0].images.icon} alt={fetchedShop.data.daily.entries[1].items[0].name}/>
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.daily.entries[1].finalPrice} Vbucks</p>
                </div>

                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.daily.entries[1].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.daily.entries[2].items[0].rarity.value}>
                <img src={fetchedShop.data.daily.entries[2].items[0].images.icon} alt={fetchedShop.data.daily.entries[2].items[0].name}/>
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.daily.entries[2].finalPrice} Vbucks</p>
                </div>

                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.daily.entries[2].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.daily.entries[3].items[0].rarity.value}>
                <img src={fetchedShop.data.daily.entries[3].items[0].images.icon} alt={fetchedShop.data.daily.entries[3].items[0].name}/>
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.daily.entries[3].finalPrice} Vbucks</p>
                </div>

                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.daily.entries[3].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.daily.entries[4].items[0].rarity.value}>
                <img src={fetchedShop.data.daily.entries[4].items[0].images.icon} alt={fetchedShop.data.daily.entries[4].items[0].name}/>
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.daily.entries[4].finalPrice} Vbucks</p>
                </div>

                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.daily.entries[4].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.daily.entries[5].items[0].rarity.value}>
                <img src={fetchedShop.data.daily.entries[5].items[0].images.icon} alt={fetchedShop.data.daily.entries[5].items[0].name}/>
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.daily.entries[5].finalPrice} Vbucks</p>
                </div>

                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.daily.entries[5].items[0].name}</p>
                </div>
              </div>}
            </div>


            {/* <h3>Featured Shop</h3>
            <div className="heroesCards">
            {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[0].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[0].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[0].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[0].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[1].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[1].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[1].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[1].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[2].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[2].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[2].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[2].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[3].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[3].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[3].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[3].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[4].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[4].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[4].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[4].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[5].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[5].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[5].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[5].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[6].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[6].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[6].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[6].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.featured.entries[7].items[0].rarity.value}>
                <img src={fetchedShop.data.featured.entries[7].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.featured.entries[7].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.featured.entries[7].items[0].name}</p>
                </div>
              </div>}

              
            </div>

            <h3>Special Featured Shop</h3>
            <div className="heroesCards">
            {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[0].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[0].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[0].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[0].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[1].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[1].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[1].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[1].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[2].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[2].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[2].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[2].items[0].name}</p>
                </div>
              </div>}
              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[3].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[3].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[3].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[3].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[4].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[4].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[4].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[4].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[5].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[5].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[5].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[5].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[5].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[6].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[6].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[6].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[7].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[7].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[7].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[7].items[0].name}</p>
                </div>
              </div>}

              {fetchedShop && <div className="heroCard" data-rarity={fetchedShop.data.specialFeatured.entries[8].items[0].rarity.value}>
                <img src={fetchedShop.data.specialFeatured.entries[8].items[0].images.icon} />
              
                <div className="heroCard__overlay">
                  <p>{fetchedShop.data.specialFeatured.entries[8].finalPrice} Vbucks</p>
                </div>
                <div className="heroCard__bottom">
                  <p>{fetchedShop.data.specialFeatured.entries[8].items[0].name}</p>
                </div>
              </div>}
            </div> */}
          
            <div className="xxx">
                <h3>My squad</h3>
                <ul>
                  {/* <li><Link to="/fortnite/save-the-world/">Save the World</Link></li> */}
                  <li>
                    <a class="link skidip" href="https://skidip.team" rel="noopener noreferrer" target="_blank">skidip.team</a>
                  </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </Layout>
    )
  }
}

export default BattleRoyalePage
