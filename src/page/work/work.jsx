import React from 'react';
import './work.scss';
import {useTranslation} from "react-i18next";


function Work(props) {
    const {t} = useTranslation();


    return (
        <div>
           <div className="work">
               <div className="left">

               </div>
               <div className="right">

                   <div className="forms ">
                       <div className="selects">
                           <div className="Region">


                               <p>{t('Region *')}</p>
                               <select className='fo' name="select">
                                   <option className='p-3' value="value1">Toshkent</option>
                                   <option value="value2">Samarqand</option>
                                   <option value="value3">Farg'ona</option>
                                   <option value="value4">Nukus</option>
                               </select>
                           </div>
                           <div className="Area">
                               <p>{t('Area *')}</p>
                               <select name="select">
                                   <option className='p-3' value="value1">Toshkent</option>
                                   <option value="value2">Samarqand</option>
                                   <option value="value3">Farg'ona</option>
                                   <option value="value4">Nukus</option>
                               </select>
                           </div>
                       </div>

                   </div>
               </div>
           </div>
        </div>
    );
}

export default Work;