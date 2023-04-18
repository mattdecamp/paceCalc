// export default function ConvertPanel() {
//   return (
//     <div
//       role="tabpanel"
//       aria-labelledby="converter"
//       id="converterWrapper"
//       hidden
//     >
//       <form name="distanceConvert" id="container">
//         <div id="calculator--wrapper">
//           <div class="c-input distance converter">
//             <input
//               type="number"
//               inputmode="decimal"
//               step="any"
//               name="miles"
//               id="miles"
//               placeholder="0"
//               value=""
//               oninput="distanceConversion(this.id,this.value)"
//               onkeyup="distanceConversion(this.id,this.value)"
//               onselect="distanceConversion(this.id,this.value)"
//               onblur="if (this.value=='') this.value='0';"
//             />
//             <label for="miles">Miles</label>
//           </div>
//           <div class="c-input distance converter">
//             <input
//               type="number"
//               inputmode="decimal"
//               step="any"
//               name="kilometers"
//               id="kilometers"
//               placeholder="0"
//               value=""
//               oninput="distanceConversion(this.id,this.value)"
//               onkeyup="distanceConversion(this.id,this.value)"
//               onselect="distanceConversion(this.id,this.value)"
//               onblur="if (this.value=='') this.value='0';"
//             />
//             <label for="kilometers">Kilometers</label>
//           </div>
//           <div class="c-input distance">
//             <input
//               type="number"
//               inputmode="decimal"
//               step="any"
//               name="yards"
//               id="yards"
//               placeholder="0"
//               value=""
//               oninput="distanceConversion(this.id,this.value)"
//               onkeyup="distanceConversion(this.id,this.value)"
//               onselect="distanceConversion(this.id,this.value)"
//               onblur="if (this.value=='') this.value='0';"
//             />
//             <label for="valueB">Yards</label>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
