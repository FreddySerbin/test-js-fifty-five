const product = document.querySelectorAll(".ProductCard");                      //Sélectionner la totalités de vignettes
let productVisible = [];                                                        //Création d'un tableau vide

let productList = document.querySelector("#productList");
let productListHeightInit = productList.getBoundingClientRect().height;         //Variable comportant la valeur de la hauteur de 'productList'

const checkIsVisible = (element) => {                                           
    const rect = element.getBoundingClientRect();                               //Variable comportant les dimensions totales de l'objet 'element'        
    if(rect.bottom <= window.innerHeight) {
        const productDataPid = element.dataset.pid;                          //Variable permettant d'accéder à l'attribut de 'dataset-pid'
        if(productVisible.includes(productDataPid)) {
            return true;
        }else{
            productVisible.push(productDataPid);
            //Sélectionner la balise comportant le titre du produit de la vignette
            const productTitle = element.querySelector(".ProductCard__inner .ProductCard__content .ProductCard__title div");                 
            const title = productTitle.textContent;
            //Sélectionner la balise comportant le prix du produit de la vignette
            const productPrice = element.querySelector(".ProductCard__inner .ProductCard__content .ProductCard__price strong");              
            const price = productPrice.textContent;
            console.log("Nom: "+title+", Prix: "+price+".");
        }
    }
};

document.addEventListener('scroll', () => {                                     //Mise en place d'un écouteur sur la page, déclenchable par l'action 'scroll'
    let newProductList = document.querySelector("#productList");
    let newProductListHeight = newProductList.getBoundingClientRect().height;
    let productCheck = product[i];
    if(productListHeightInit == newProductListHeight) {
        for(i=0; i<product.length; i++) {
            productCheck = product[i];
            checkIsVisible(productCheck);
        }
    }else if(productListHeightInit !== newProductListHeight){
        const product = document.querySelectorAll(".ProductCard");
        for(i=0; i<product.length; i++) {
            newProductCheck = product[i];
            checkIsVisible(newProductCheck);
        }
    }
});


