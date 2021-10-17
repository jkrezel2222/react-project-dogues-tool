// import React, { Component } from "react";

// export class DogFavourite extends Component {
//     render() {
//         const fav = this.props.dogsfav.map(item => (
//             <div> 
//                                 <article className="card">
//                                     <br></br>
//                                     <div>
//                                         <h3>
//                                             {item.breedName.toUpperCase()}
//                                         </h3>
//                                     </div>
//                                     <div>
//                                         <img src={item.image} alt={item.breedName} />
//                                     </div>
//                                     <br></br>
//                                         <div>
//                                         <p className="card-description">
//                                             {item.description}
//                                         </p>
//                                         <div className="card-list">
//                                             <p>
//                                                 - Height: {" "}
//                                                 <span>{item.dogInfo.height}</span>
//                                             </p>
//                                             <p>
//                                                 - Weight: {" "}
//                                                 <span>{item.dogInfo.weight}</span>
//                                             </p>
//                                             <p>
//                                                 - Life expectancy: {" "}
//                                                 <span>{item.dogInfo.life}</span>
//                                             </p>
//                                             <div>
//                                             <br></br>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </article>
//                                 </div>
//         ));
//         return (
//             <div>
//                 <h3>Favourite</h3>
//                 {fav}
//             </div>
//         )
//     }
// }

// export default DogFavourite;
