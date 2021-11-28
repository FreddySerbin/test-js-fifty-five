
const product = document.querySelectorAll(".ProductCard");                      //Sélectionner la totalités de vignettes
let productVisible = [];                                                        //Création d'un tableau vide

//
const checkIsVisible = (element) => {                                           
    const rect = element.getBoundingClientRect();                               //Variable comportant les dimensions totales de l'objet 'element'        
    if(rect.bottom <= window.innerHeight) {
        const productDataPid = product[i].dataset.pid;                          //Variable permettant d'accéder à l'attribut de 'dataset-pid'
        if(productVisible.includes(productDataPid)) {
            return true;
        }else{
            productVisible.push(productDataPid);
            //Sélectionner la balise comportant le titre du produit de la vignette
            const productTitle = product[i].querySelector(".ProductCard__inner .ProductCard__content .ProductCard__title div");                 
            const title = productTitle.textContent;
            //Sélectionner la balise comportant le prix du produit de la vignette
            const productPrice = product[i].querySelector(".ProductCard__inner .ProductCard__content .ProductCard__price strong");              
            const price = productPrice.textContent;
            console.log(title);
            console.log(price);
        }
    }
};

document.addEventListener('scroll', () => {                                     //Mise en place d'un écouteur sur la page, déclenchable par l'action 'scroll'
    for(i=0; i<26; i++) {
        productCheck = product[i];
        checkIsVisible(productCheck);
    }
});


