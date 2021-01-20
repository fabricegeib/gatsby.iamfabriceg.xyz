import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
// import Image from "../components/image"
import SEO from "../../../components/seo"

// const BattleRoyalePage = () => (
const BattleRoyalePage = () => {
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  const [fetchedData, setFetchData] = useState([])

  useEffect(() => {
    // fetch(`${process.env.FORTNITE_API_URL}`)
    fetch("https://fortnite-api.com/v2/shop/br?language=fr")
      .then(response => {
        // console.log(response);
        return response.json()
      })
      .then(json => {
        setFetchData(json.data)
        console.log("yolo", fetchedData)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Battle Royale" />
      <div className="fortnite_battle-royale">
        <div className="container">
          <h3>
            <span className="backArrow">
              <Link to="/fortnite/">&#8592;</Link>
            </span>
            Fortnite
          </h3>

          <h3>Battle Royale</h3>

          <p>Drop in to new world (PvP)</p>

          <div className="fortnite_battle-royale_shop">
            {fetchedData && (
              <>
                {fetchedData.daily && (
                  <div className="fortnite_battle-royale_shop-daily">
                    <h3 className="fnFont">Daily Shop</h3>

                    <div className="heroesCards">
                      {fetchedData.daily.entries.map((entry, i) => {
                        return (
                          <div
                            className="heroCard"
                            key={i}
                            data-rarity={entry.items[0].rarity.value}
                          >
                            <div>
                              <img
                                src={entry.items[0].images.icon}
                                alt={entry.items[0].name}
                              />
                            </div>

                            <div className="heroCard__overlay">
                              <p className="fnFont">{entry.items[0].name}</p>
                              <p>{entry.items[0].type.displayValue}</p>
                            </div>

                            <div className="heroCard__bottom">
                              <p>{entry.regularPrice}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {fetchedData.featured && (
                  <div className="fortnite_battle-royale_shop-daily">
                    <h3 className="fnFont">Featured Shop</h3>

                    <div className="heroesCards">
                      {fetchedData.featured.entries.map((entry, i) => {
                        return (
                          <div
                            className="heroCard"
                            key={i}
                            data-rarity={entry.items[0].rarity.value}
                          >
                            <div>
                              <img
                                src={entry.items[0].images.icon}
                                alt={entry.items[0].name}
                              />
                            </div>

                            <div className="heroCard__overlay">
                              <p className="fnFont">{entry.items[0].name}</p>
                              <p>{entry.items[0].type.displayValue}</p>
                            </div>

                            <div className="heroCard__bottom">
                              <p>{entry.regularPrice}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {fetchedData.specialFeatured && (
                  <div className="fortnite_battle-royale_shop-daily">
                    <h3 className="fnFont">Featured Shop</h3>

                    <div className="heroesCards">
                      {fetchedData.specialFeatured.entries.map((entry, i) => {
                        return (
                          <div
                            className="heroCard"
                            key={i}
                            data-rarity={entry.items[0].rarity.value}
                          >
                            <div>
                              <img
                                src={entry.items[0].images.icon}
                                alt={entry.items[0].name}
                              />
                            </div>

                            <div className="heroCard__overlay">
                              <p className="fnFont">{entry.items[0].name}</p>
                              <p>{entry.items[0].type.displayValue}</p>
                            </div>

                            <div className="heroCard__bottom">
                              <p>{entry.regularPrice}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </>
            )}

            <p>
              data from{" "}
              <a
                href="https://fortnite-api.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fortnite-api.com
              </a>
            </p>

            {/* <img src={fetchedData.data.daily.entries[0].items[0].images.icon} 
                 alt={fetchedData.data.daily.entries[0].items[0].name}
            />
          
            <p>{fetchedData.data.daily.entries[0].items[0].name}</p>
            <p>{fetchedData.data.daily.entries[0].items[0].type.value}</p>
          
            <p>{fetchedData.data.daily.entries[0].finalPrice}</p> */}

            <div className="xxx">
              <h3>My squad</h3>
              <div className="cards">
                <a
                  href="https://skidip.team"
                  rel="noopener noreferrer"
                  target="_blank"
                >
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

export default BattleRoyalePage