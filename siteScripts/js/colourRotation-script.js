window.addEventListener('load', () => {

    const interval_01 = 4000; // milliseconds
    const interval_02 = 6000; // milliseconds
    const colorArray_01 = ['#DFD06B', '#9F8FDD', '#CB8AB4', '#D26581'];
    const colorArray_02 = ['#F3CFFF', '#FC9AA9', '#FCD6A9', '#FFB283'];
    
    /* headshots 
    (headshots = () => {

        let headshots = document.getElementById('kt-layout-id_cc12a3-99').style;

        /* loop 
        (loop = () => {

            /* array-01 
            colorArray_01.forEach((color, index) => {        

                setTimeout(() => {

                    headshots.setProperty('background-color', color);
                }, index * interval_01);    
            
            });

            setTimeout(loop, colorArray_01.length * interval_01); // (*)

        })();
    })();

    */

    /* about */
    (about = () => {

        let about = document.getElementById('kt-layout-id_cc12a3-99').style;
     
        /* loop */
        (loop = () => {

            /* array-01 */
            colorArray_02.forEach((color, index) => {        

                setTimeout(() => {

                    about.setProperty('background-color', color);
                }, index * interval_02);    
            
            });

            setTimeout(loop, colorArray_02.length * interval_02); // (*)

        })();
    })();
});