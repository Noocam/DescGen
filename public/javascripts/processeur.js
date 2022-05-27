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

let serie = document.querySelector("#serie");
let socket = document.querySelector("#socket");
let freq = document.querySelector("#freq");
let turbofreq = document.querySelector("#turbofreq");
let nbrcore = document.querySelector("#nbrcore");
let nbrthread = document.querySelector("#nbrthread");
let packaging = document.querySelector("#packaging");
let cooling = document.querySelector("#cooling");
let chipset = document.querySelector("#chipset");
let chipfreq = document.querySelector("#chipfreq");
let plateform = document.querySelector("#plateform");
let tdp = document.querySelector("#tdp");
let cache = document.querySelector("#cache");
let chipcomp = document.querySelector("#chipcomp");
let memtype = document.querySelector("#memtype");
let duachan = document.querySelector("#duachan");
let memfreq = document.querySelector("#memfreq");
let virt = document.querySelector("#virt");

let garantie = document.querySelector("#garantie");



let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, serie, socket, freq, turbofreq, nbrcore, nbrthread, packaging, cooling, chipset, chipfreq, plateform, tdp, cache, chipcomp, memtype, duachan, memfreq, virt, garantie){
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
    <div style="float: left; margin-top: 2px;">Série</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${serie}</div>
    </td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Socket</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${socket}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Fréquence</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${freq}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Frequence en mode Turbo</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${turbofreq}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Nombre de Cœurs</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${nbrcore}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Nombre de Threads</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${nbrthread}</div>
    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Packaging</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${packaging}</div>
		    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Refroidissement fourni</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${cooling}</div>
		    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CHIPSET GRAPHIQUE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Chipset</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" >
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chipset}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Fréquence du chipset</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chipfreq}</div>
    </td>
    </tr>
    
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >ARCHITECTURE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Plateforme</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${plateform}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">TDP</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${tdp}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Cache L3</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${cache}</div>
    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Compatibilité de cartes mères (chipset)</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chipcomp}</div>
		    </td>
    </tr>

    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >MÉMOIRE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr>
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Type de mémoire</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memtype}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Compatibilité Dual Channel</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${duachan}</div>
    </td>
    </tr>

    <tr >
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Fréquence(s) mémoire</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memfreq}</div>
		    </td>
    </tr>

    <tr>
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
		    <h3 >TECHNOLOGIES SPECIFIQUES</h3>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
		    </tr>
		    <tr>
		    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
		    <div style="float: left; margin-top: 2px;">Vitrualisation</div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
		    </td>
		    <td style="border-bottom: #E8E8E8 solid 1px;">
		    <div style="margin-left: 20px; float: left; margin-top: 2px;">${virt}</div>
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
    <p  style="text-align: center;"><span>Retrouvez nos processeurs, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
    </div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, serie.value, socket.value, freq.value, turbofreq.value, nbrcore.value, nbrthread.value, packaging.value, cooling.value, chipset.value, chipfreq.value, plateform.value, tdp.value, cache.value, chipcomp.value, memtype.value, duachan.value, memfreq.value, virt.value, garantie.value);
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

    serie.value = "";
    socket.value = "";
    freq.value = "";
    turbofreq.value = "";
    nbrcore.value = "";
    nbrthread.value = "";
    packaging.value = "";
    cooling.value = "";
    chipset.value = "";
    chipfreq.value = "";
    plateform.value = "";
    tdp.value = "";
    cache.value = "";
    chipcomp.value = "";
    memtype.value = "";
    duachan.value = "";
    memfreq.value = "";
    virt.value = "";

    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
