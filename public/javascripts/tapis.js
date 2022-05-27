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

let usevar = document.querySelector("#usevar");
let repose = document.querySelector("#repose");
let RGB = document.querySelector("#RGB");


let dimensions = document.querySelector("#dimensions");
let poids = document.querySelector("#poids");
let mats = document.querySelector("#mats");
let couleur = document.querySelector("#couleur");

let garantie = document.querySelector("#garantie");



let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, usevar, repose, RGB, dimensions, poids, mats, couleur, garantie){
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
	    <h3 >ERGONOMIE</h3>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
	    </tr>

    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Utilisation</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${usevar}</div>
	    </td>
    </tr>
    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Repose poignet</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${repose}</div>
	    </td>
    </tr>

    <tr  >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">RGB / LED</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${RGB}</div>
	    </td>
    </tr>
    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
	    <h3 >CARACTERISTIQUES PHYSIQUES</h3>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
	    <div style="float: left; margin-top: 2px;">Dimensions (L x I x H) en cm</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
	    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${dimensions}</div>
	    </td>
	    </tr>
	    <tr >
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
	    <tr >
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
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;" width="340">
		    <div style="float: left; margin-top: 2px;">Couleur</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;" width="630">
		    <div style="margin-left: 20px; float: left; margin-top: 2px; width: 580px;">${couleur}</div>
		    </td>
	    </tr>


    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
	    <h3 >GARANTIE</h3>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
	    </tr>
	    <tr>
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
</div>
</td>
</tr>
</tbody>
</table>
    <p></p>
    <div>
	    <td colspan="2"><hr /></td>
	    <p style="text-align: center;"><span>Pour plus d'informations, vous pouvez consulter la page du produit sur le site du constructeur, disponible</span><span style="color: #fc8628;"><strong> <a href="${construct}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
	    <p  style="text-align: center;"><span>Retrouvez nos tapis de souris, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
    </div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, usevar.value, repose.value, RGB.value, dimensions.value, poids.value, mats.value, couleur.value, garantie.value);
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
    usevar.value= "";
    repose.value= "";
    RGB.value= "";
    dimensions.value = "";
    poids.value = "";
    mats.value = "";
    couleur.value = "";
    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
