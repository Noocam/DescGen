let maintitle = document.querySelector("#maintitle");

let firsttitle = document.querySelector("#firsttitle");
let firstdesc = document.querySelector("#firstdesc");

let secondtitle = document.querySelector("#secondtitle");
let seconddesc = document.querySelector("#seconddesc");

let thirdtitle = document.querySelector("#thirdtitle");
let thirddesc = document.querySelector("#thirddesc");

let construct = document.querySelector("#construct");
let cat = document.querySelector("#cat");
let marque = document.querySelector("#marque");
let reffab = document.querySelector("#reffab");
let modele = document.querySelector("#modele");

let cmformat = document.querySelector("#cmformat");

let btype = document.querySelector("#btype");

let alimformat = document.querySelector("#alimformat");

let alimfourni = document.querySelector("#alimfourni");

let usetype = document.querySelector("#usetype");

let dimensions = document.querySelector("#dimensions");

let poids = document.querySelector("#poids");

let mats = document.querySelector("#mats");

let couleur = document.querySelector("#couleur");

let latpan = document.querySelector("#latpan");

let gclenght = document.querySelector("#gclenght");

let hmaxvent = document.querySelector("#hmaxvent");

let vavant = document.querySelector("#vavant");

let varriere = document.querySelector("#varriere");

let vhaut = document.querySelector("#vhaut");

let vbas = document.querySelector("#vbas");

let compavant = document.querySelector("#compavant");

let comparriere = document.querySelector("#comparriere");

let comphaut = document.querySelector("#comphaut");

let compbas = document.querySelector("#compbas");

let connectfa = document.querySelector("#connectfa");

let nbremp1 = document.querySelector("#nbremp1");

let nbremp2 = document.querySelector("#nbremp2");

let nbremp3 = document.querySelector("#nbremp3");

let garantie = document.querySelector("#garantie");



let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, cmformat, btype, alimformat, alimfourni, usetype, dimensions, poids, mats, couleur, latpan, gclenght, hmaxvent, vavant, varriere, vhaut, vbas, compavant, comparriere, comphaut, compbas, connectfa, nbremp1, nbremp2, nbremp3, garantie){
    let final_string = `<div style="text-align:center;">
    <h1>
	    ${maintitle}
    </h1>
    </div>
    
    <hr />
    
    <table cellpadding="15" align="center">
    <tbody>
    <tr>
    <td style="text-align: justify;" width="65%">
    <h3 style="color: #fc8628;">${firsttitle}</h4>
    <p>${firstdesc}</p>
    </td>
    <td align="center"><img src="https://www.instinctgaming.gg/9050-medium_default/tapis-corsair-gaming-mm100-medium-320x270mm-3mm.jpg" alt="" width="250" height="250" /></td>
    </tr>
    <tr>
    <td colspan="2"><hr /></td>
    </tr>
    <tr>
    <td style="text-align: justify;" width="65%">
    <h3 style="color: #fc8628;">${secondtitle}</h4>
    <p>${seconddesc}</p>  
    </td>
    <td align="center"><img src="https://www.instinctgaming.gg/9053-medium_default/tapis-corsair-gaming-mm100-medium-320x270mm-3mm.jpg" alt="" width="250" height="250" /></td>
    </tr>
    <tr>
    <td colspan="2"><hr /></td>
    </tr>
    <tr>
    <td>
    <h3 style="color: #fc8628;">${thirdtitle}</h4>
    <p style="text-align: justify;">${thirddesc}</p>
    </td>
    <td align="center"><img src="https://www.instinctgaming.gg/9051-medium_default/tapis-corsair-gaming-mm100-medium-320x270mm-3mm.jpg" alt="" width="250" height="250" /></td>
    </tr>
    <tr>
    <td colspan="2"><hr /></td>
    </tr>
    </tbody>
    </table>
    
    <div style="text-align:center;">
		    <h2>
			    DESCRIPTION DETAILLÉE
		    </h2>
    </div>
    
    <table width="100%" cellpadding="15" align="center">
    <tbody>
    <tr>
    <td>
    <div style="overflow-x:auto;">
    <table>
    <tbody>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >INFORMATIONS GENERALES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    <td></td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Marque</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${marque}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Référence fabricant (Sku)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${reffab}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Modèle</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${modele}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">



    <h3 >CARACTERISTIQUES PRINCIPALES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Format de la carte mère</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${cmformat}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Type de boitier</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${btype}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Format d'alimentation</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${alimformat}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Alimentation fournie</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${alimfourni}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Utilisation type</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${usetype}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CARACTERISTIQUES PHYSIQUES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Dimensions (L x l x H) en cm</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" >
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${dimensions}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Poids</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${poids}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Matériaux</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${mats}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Couleur</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${couleur}</div>
    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Panneau latéral fenêtré</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${latpan}</div>
		    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Longueur max de la carte graphique</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${gclenght}</div>
		    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >REFROIDISSEMENT</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Hauteur max du ventirad</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${hmaxvent}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ventilateurs fournis Avant</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${vavant}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ventilateurs fournis Arrière</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${varriere}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ventilateurs fournis haut</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${vhaut}</div>
    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Ventilateurs fournis bas</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${vbas}</div>
		    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Compatibilité AIO avant</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${compavant}</div>
		    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Compatibilité AIO arrière</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${comparriere}</div>
		    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Compatibilité AIO haut</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${comphaut}</div>
		    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Compatibilité AIO bas</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${compbas}</div>
		    </td>
    </tr>


    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >ERGONOMIE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Connectique en façade</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${connectfa}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Nombre d'emplacements 2,5''</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${nbremp1}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Nombre d'emplacements 3,5''</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${nbremp2}</div>
    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Nombre d'emplacements 5,25"</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${nbremp3}</div>
		    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >GARANTIE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Garantie constructeur</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${garantie}</div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    <p></p>
    <div>
    <td colspan="2"><hr /></td>
    <p style="text-align: center;"><span>Pour plus d'informations, vous pouvez consulter la page du produit sur le site du constructeur, disponible</span><span style="color: #fc8628;"><strong> <a href="${construct}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
    <p  style="text-align: center;"><span>Retrouvez nos boitiers, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
</div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, cmformat.value, btype.value, alimformat.value, alimfourni.value, usetype.value, dimensions.value, poids.value, mats.value, couleur.value, latpan.value, gclenght.value, hmaxvent.value, vavant.value, varriere.value, vhaut.value, vbas.value, compavant.value, comparriere.value, comphaut.value, compbas.value, connectfa.value, nbremp1.value, nbremp2.value, nbremp3.value, garantie.value);
    maintitle.value = "";
    firsttitle.value ="";
    firstdesc.value = "";
    secondtitle.value = "";
    seconddesc.value = "";
    thirdtitle.value = "";
    thirddesc.value = "";
    construct.value = "";
    cat.value = "";
    marque.value = "";
    reffab.value = "";
    modele.value = "";
    cmformat.value
    btype.value = "";
    alimformat.value = "";
    alimfourni.value = "";
    usetype.value = "";
    dimensions.value = "";
    poids.value = "";
    mats.value = "";
    couleur.value = "";
    latpan.value = "";
    gclenght.value = "";
    hmaxvent.value = "";
    vavant.value = "";
    varriere.value = "";
    vhaut.value = "";
    vbas.value = "";
    compavant.value = "";
    comparriere.value = "";
    comphaut.value = "";
    compbas.value = "";
    connectfa.value = "";
    nbremp1.value = "";
    nbremp2.value = "";
    nbremp3.value = "";
    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
