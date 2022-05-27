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

let compatintel = document.querySelector("#compatintel");
let compatamd = document.querySelector("#compatamd");
let coolingtype = document.querySelector("#coolingtype");
let led = document.querySelector("#led");
let affich = document.querySelector("#affich");
let diamvent = document.querySelector("#diamvent");
let pwm = document.querySelector("#pwm");
let airdeb = document.querySelector("#airdeb");
let lvlson = document.querySelector("#lvlson");
let roulement = document.querySelector("#roulement");
let vrota = document.querySelector("#vrota");
let dimvent = document.querySelector("#dimvent");


let dimensions = document.querySelector("#dimensions");
let poids = document.querySelector("#poids");
let mats = document.querySelector("#mats");

let garantie = document.querySelector("#garantie");



let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, compatintel, compatamd, coolingtype, led, affich, diamvent, pwm, airdeb, lvlson, roulement, vrota, dimvent, dimensions, poids, mats, garantie){
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
<h4 style="color: #fc8628;">${firsttitle}</h4>
<p>${firstdesc}</p>
</td>
<td align="center"><img src="https://www.instinctgaming.gg/9050-medium_default/tapis-corsair-gaming-mm100-medium-320x270mm-3mm.jpg" alt="" width="250" height="250" /></td>
</tr>
<tr>
<td colspan="2"><hr /></td>
</tr>
<tr>
<td style="text-align: justify;" width="65%">
<h4 style="color: #fc8628;">${secondtitle}</h4>
<p> ${seconddesc}</p>
</td>
<td align="center"><img src="https://www.instinctgaming.gg/9053-medium_default/tapis-corsair-gaming-mm100-medium-320x270mm-3mm.jpg" alt="" width="250" height="250" /></td>
</tr>
<tr>
<td colspan="2"><hr /></td>
</tr>
<tr>
<td>
<h4 style="color: #fc8628;">${thirdtitle}</h4>
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
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >INFORMATIONS GENERALES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    <td></td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Marque</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${marque}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Référence fabricant (Sku)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${reffab}</div>
    </td>
    </tr>
    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Modèle</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${modele}</div>
	    </td>
	    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CARACTERISTIQUES PRINCIPALES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Compatibilité Intel</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${compatintel}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Compatibilité AMD</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${compatamd}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Type de refroidissement</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${coolingtype}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">LED</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${led}</div>
    </td>
    </tr>
    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Matériaux</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${mats}</div>
	    </td>
    </tr>
    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Afficheur LCD</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${affich}</div>
	    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >VENTILATEURS</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Diamètre des ventilateurs</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${diamvent}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">PWM</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${pwm}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Débit d'air</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${airdeb}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Niveau_sonore</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${lvlson}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Roulements à billes</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${roulement}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Vitesse_de_rotation</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${vrota}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CARACTERISTIQUES PHYSIQUES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Dimensions (L x l x H) en cm</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${dimensions}</div>
    </td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Dimensions (ventilateurs inclus)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${dimvent}</div>
    </td>
    </tr>
    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Poids</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${poids}</div>
	    </td>
	    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >GARANTIE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr  >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
    <div style="float: left; margin-top: 2px;">Garantie constructeur</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${garantie}</div>
    </td>
    </tr>
    </tbody>
    </table>
    <p></p>
    <div>
		    <td colspan="2"><hr /></td>
		    <p style="text-align: center;"><span>Pour plus d'informations, vous pouvez consulter la page du produit sur le site du constructeur, disponible</span><span style="color: #fc8628;"><strong> <a href="${construct}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
		    <p  style="text-align: center;"><span>Retrouvez nos systemes de refroidissement, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
    </div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, compatintel.value, compatamd.value, coolingtype.value, led.value, affich.value, diamvent.value, pwm.value, airdeb.value, lvlson.value, roulement.value, vrota.value, dimvent.value, dimensions.value, poids.value, mats.value, garantie.value);
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

    compatintel.value = "";
    compatamd.value = "";
    coolingtype.value = "";
    led.value = "";
    affich.value = "";
    diamvent.value = "";
    pwm.value = "";
    airdeb.value = "";
    lvlson.value = "";
    roulement.value = "";
    vrota.value = "";
    dimvent.value = "";

    dimensions.value = "";
    poids.value = "";
    mats.value = "";
    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
