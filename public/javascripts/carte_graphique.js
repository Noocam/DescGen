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

let chipsetgraph = document.querySelector("#chipsetgraph");
let freq = document.querySelector("#freq");
let freqoc = document.querySelector("#freqoc");
let oc = document.querySelector("#oc");
let bustype = document.querySelector("#bustype");
let usevar = document.querySelector("#usevar");
let memtype = document.querySelector("#memtype");
let memcap = document.querySelector("#memcap");
let memfreq = document.querySelector("#memfreq");
let multigpu = document.querySelector("#multigpu");
let directx = document.querySelector("#directx");
let hdr = document.querySelector("#hdr");
let vrr = document.querySelector("#vrr");
let resmax = document.querySelector("#resmax");
let multidisplay = document.querySelector("#multidisplay");
let dpnbr = document.querySelector("#dpnbr");

let dpnorm = document.querySelector("#dpnorm");
let hdminbr = document.querySelector("#hdminbr");
let hdmi = document.querySelector("#hdmi");
let dvinbr = document.querySelector("#dvinbr");
let dvi = document.querySelector("#dvi");
let vganbr = document.querySelector("#vganbr");
let alimcon = document.querySelector("#alimcon");


let dimensions = document.querySelector("#dimensions");
let cooling = document.querySelector("#cooling");
let lprofile = document.querySelector("#lprofile");
let alimr = document.querySelector("#alimr");

let poids = document.querySelector("#poids");
let nbrslot = document.querySelector("#nbrslot");
let RGB = document.querySelector("#RGB");

let garantie = document.querySelector("#garantie");

let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, chipsetgraph, freq, freqoc, oc, bustype, usevar, memtype, memcap, memfreq, multigpu, directx, hdr, vrr, resmax, usevar, multidisplay, dpnbr, dpnorm, hdminbr, hdmi, dvinbr, dvi, vganbr, alimcon, dimensions, cooling, lprofile, alimr, poids, nbrslot, RGB, garantie){
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
	    <div style="float: left; margin-top: 2px;">Chipset Graphique</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chipsetgraph}</div>
	    </td>
	    </tr>
	    <tr>
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
	    <div style="float: left; margin-top: 2px;">Fréquence en mode OC</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${freqoc}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">OC</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${oc}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Type de bus</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${bustype}</div>
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
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${usevar}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
	    <h3 >MÉMOIRE</h3>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Type de mémoire</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" >
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memtype}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Capacité</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memcap}</div>
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
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memfreq}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
	    <h3 >SPECIFICATIONS TECHNIQUES</h3>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Multi-GPU</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${multigpu}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Support Direct X</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${directx}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">HD Ready</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${hdr}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">VR Ready</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${vrr}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Résolution Max</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${resmax}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Affichage multiple</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${multidisplay}</div>
	    </td>
	    </tr>


	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
	    <h3 >CONNECTIQUES</h3>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Nombre de ports DisplayPort</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${dpnbr}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Norme DP</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${dpnorm}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Nombre de ports HDMI</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${hdminbr}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Norme HDMI</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${hdmi}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Nombre de ports DVI</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${dvinbr}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Norme DVI</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${dvi}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Nombre de ports VGA</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${vganbr}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Connecteurs d'alimentation</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${alimcon}</div>
	    </td>
	    </tr>



	    <tr>
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
	    <h3 >ERGONOMIE</h3>
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
	    <div style="float: left; margin-top: 2px;">Dimensions (L x l x E) en cm</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${dimensions}</div>
	    </td>
	    </tr>
	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Refroidissement</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${cooling}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Low Profile</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${lprofile}</div>
	    </td>
	    </tr>

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Alimentation recommandée</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${alimr}</div>
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

	    <tr >
	    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
	    <div style="float: left; margin-top: 2px;">Nombre de slots occupés</div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
	    </td>
	    <td style="border-bottom: #E8E8E8 solid 1px;">
	    <div style="margin-left: 20px; float: left; margin-top: 2px;">${nbrslot}</div>
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
	    <p  style="text-align: center;"><span>Retrouvez nos cartes graphiques, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
	    </div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, chipsetgraph.value, freq.value, freqoc.value, oc.value, bustype.value, usevar.value, memtype.value, memcap.value, memfreq.value, multigpu.value, directx.value, hdr.value, vrr.value, resmax.value, usevar.value, multidisplay.value, dpnbr.value, dpnorm.value, hdminbr.value, hdmi.value, dvinbr.value, dvi.value, vganbr.value, alimcon.value, dimensions.value, cooling.value, lprofile.value, alimr.value, poids.value, nbrslot.value, RGB.value, garantie.value);
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

    chipsetgraph.value = "";
    freq.value = "";
    freqoc.value = "";
    oc.value = "";
    bustype.value = "";
    usevar.value = "";
    memtype.value = "";
    memcap.value = "";
    memfreq.value = "";
    multigpu.value = "";
    directx.value = "";
    hdr.value = "";
    vrr.value = "";
    resmax.value = "";
    usevar.value = "";
    multidisplay.value = "";
    dpnbr.value = "";
    dpnorm.value = "";
    hdminbr.value = "";
    hdmi.value = "";
    dvinbr.value = "";
    dvi.value = "";
    vganbr.value = "";
    alimcon.value = "";
    dimensions.value = "";
    cooling.value = "";
    lprofile.value = "";
    alimr.value = "";
    poids.value = "";
    nbrslot.value = "";
    RGB.value = "";


    
    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
