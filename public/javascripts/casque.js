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

let typevar = document.querySelector("#typevar");
let cable = document.querySelector("#cable");
let connect = document.querySelector("#connect");
let oformat = document.querySelector("#oformat");
let surround = document.querySelector("#surround");
let compat = document.querySelector("#compat");
let diam = document.querySelector("#diam");
let bandemini1 = document.querySelector("#bandemini1");
let bandemaxi1 = document.querySelector("#bandemaxi1");
let pedance = document.querySelector("#pedance");
let microtype = document.querySelector("#microtype");
let detachable = document.querySelector("#detachable");
let bandemini2 = document.querySelector("#bandemini2");
let bandemaxi2 = document.querySelector("#bandemaxi2");
let usevar = document.querySelector("#usevar");
let vcontrol = document.querySelector("#vcontrol");
let RGB = document.querySelector("#RGB");


let poids = document.querySelector("#poids");
let couleur = document.querySelector("#couleur");

let garantie = document.querySelector("#garantie");



let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, typevar, cable, connect, oformat, surround, compat, diam, bandemini1, bandemaxi1, pedance, microtype, detachable, bandemini2, bandemaxi2, usevar, vcontrol, RGB, poids, couleur, garantie){
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
    <h3 >TECHNOLOLGIE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Type</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${typevar}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Avec fil / Sans fil</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${cable}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Connectivité</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${connect}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Format des oreillettes</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${oformat}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Surround</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${surround}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Compatibilité</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${compat}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >AUDIO</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Diamètre des hauts-parleurs</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" >
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${diam}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Bande passante (mini)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${bandemini1}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Bande passante (maxi)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${bandemaxi1}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Impédance</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${pedance}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >MICRO</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Type de micro</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${microtype}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Detachable</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${detachable}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Bande passante (mini)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${bandemini2}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Bande passante (maxi)</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${bandemaxi2}</div>
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
    <div style="float: left; margin-top: 2px;">Utilisation</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${usevar}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Contrôle du volume</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${vcontrol}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">RGB</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${RGB}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CARACTERISTIQUES PHYSIQUES</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr>
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
    <p  style="text-align: center;"><span>Retrouvez nos casques, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
    </div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, typevar.value, cable.value, connect.value, oformat.value, surround.value, compat.value, diam.value, bandemini1.value, bandemaxi1.value, pedance.value, microtype.value, detachable.value, bandemini2.value, bandemaxi2.value, usevar.value, vcontrol.value, RGB.value, poids.value, couleur.value, garantie.value);
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
    typevar.value= "";
    cable.value= "";
    connect.value= "";
    oformat.value= "";
    surround.value= "";
    compat.value= "";
    diam.value= "";
    bandemini1.value= "";
    bandemaxi1.value= "";
    pedance.value= "";
    microtype.value= "";
    detachable.value= "";
    bandemini2.value= "";
    bandemaxi2.value= "";
    usevar.value= "";
    vcontrol.value= "";
    RGB.value= "";
    
    poids.value = "";
    couleur.value = "";
    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
