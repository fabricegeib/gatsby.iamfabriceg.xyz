// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const ApiPage = class extends React.Component {

//   state = {
//     loading: true,
//     error: false,
//     fetchData: []
//   }

//   componentDidMount() {
//     // {`${process.env.MADAM_NAZAR_API_URL}/location/current`}
//     // {'${process.env.IMG_URL}'}

//     fetch(`${process.env.IAMFABRICEG_API_URL}`)
//       .then(response => {
//         // console.log(response);
//         return response.json()
//       }).then(json => {
//         // console.log(json)
//         this.setState({
//           fetchedData: json,
//           loading: false
//         })
//       })
//   }

//   render() {

//     const {fetchedData} = this.state
//     // console.log(fetchedData)

//     return (
//       <Layout>
//         <SEO title="Red Dead Redemption 2" />
//           <div className="container">
//             <h3><span className="backArrow"><Link to="/">&#8592;</Link></span>Api</h3>


//             <div className="madamnazar">
//               {fetchedData &&<h3>{fetchedData.title} :</h3>}

//               {fetchedData &&<p>{fetchedData.author.firstName} {fetchedData.author.lastName}</p>}

//               {/* {fetchedData && <p>{fetchedData.data.location.region.name}, {fetchedData.data.location.region.precise} ({fetchedData.data.location.cardinals.full}) - {fetchedData.dataFor}</p>} */}
//               {/* {fetchedData && <p>{fetchedData.data.location.region.name}</p>}
//               {fetchedData && <p>{fetchedData.data.location.region.precise}</p>} */}

//               {/* {fetchedData && <p>{fetchedData.data.location.cardinals.full}</p>} */}
//               {/* {fetchedData && <p>{fetchedData.data.location.cardinals.simplified}</p>} */}


//               {/* {fetchedData && <img src={fetchedData.data.location.image} alt="{fetchedData.data.location.region.name}" />} */}

//               {/* {fetchedData && <p>{fetchedData.data.name}</p>} */}

//               <p>data from <a href="#" target="_blank" rel="noopener noreferrer">api.fabricegeib.xyz</a></p>
//             </div>
//             {/* <Link to="/">Go back to the homepage</Link> */}
//         </div>
//       </Layout>
//     )
//   }
// }

// export default ApiPage