// import React from 'react';
// import './mobx.css';
import { types } from 'mobx-state-tree';


const mb: any = {
    mb1: types.model('gogo~', {
        mb1_1: types.string,
        mb1_2: types.number
    })
}

// function App() {
//     return (
//         <div className="bg">
//             <p className="bg-p">
//                 TEST2
//             </p>
//         </div>
//     );
// }

export default mb;