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


let compatcpu = document.querySelector("#compatcpu");
let socket = document.querySelector("#socket");
let chipset = document.querySelector("#chipset");
let memtype = document.querySelector("#memtype");
let memfreq = document.querySelector("#memfreq");
let duachan = document.querySelector("#duachan");
let slotcapac = document.querySelector("#slotcapac");
let maxcap = document.querySelector("#maxcap");
let ecc = document.querySelector("#ecc");
let chipsetgint = document.querySelector("#chipsetgint");
let memshare = document.querySelector("#memshare");
let audiochip = document.querySelector("#audiochip");
let chan = document.querySelector("#chan");
let ether = document.querySelector("#ether");
let wifi = document.querySelector("#wifi");
let blue = document.querySelector("#blue");
let sata = document.querySelector("#sata");
let m2 = document.querySelector("#m2");
let raid = document.querySelector("#raid");
let pci1 = document.querySelector("#pci1");
let pci2 = document.querySelector("#pci2");
let pci3 = document.querySelector("#pci3");
let pci4 = document.querySelector("#pci4");
let backpanel = document.querySelector("#backpanel");
let usb = document.querySelector("#usb");
let consup = document.querySelector("#consup");
let led = document.querySelector("#led");
let format = document.querySelector("#format");

let dimensions = document.querySelector("#dimensions");
let couleur = document.querySelector("#couleur");

let garantie = document.querySelector("#garantie");



let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(maintitle, firsttitle, firstdesc, secondtitle, seconddesc, thirdtitle, thirddesc, construct, cat, marque, reffab, modele, dimensions, couleur, compatcpu, socket, chipset, memtype, memfreq, duachan, slotcapac, maxcap, ecc, chipsetgint, memshare, audiochip, chan, ether, wifi, blue, sata, m2, raid, pci1, pci2, pci3, pci4, backpanel, usb, consup, led, format, garantie){
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
    <h3 >PROCESSEUR</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Compatibilité CPU</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${compatcpu}</div>
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
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CHIPSET</h3>
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
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chipset}</div>
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
    <div style="float: left; margin-top: 2px;">Type</div>
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
    <div style="float: left; margin-top: 2px;">Fréquences Mémoire</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memfreq}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Technologie Dual Channel</div>
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
    <div style="float: left; margin-top: 2px;">Capacité maximale par slot</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${slotcapac}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Capacité maximale</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${maxcap}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">RAM ECC prise en charge</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${ecc}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >CHIPSET GRAPHIQUE EMBARQUE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Chipset graphique intégré</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chipsetgint}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Mémoire partagée</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${memshare}</div>
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
    <div style="float: left; margin-top: 2px;">Chipset Audio</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${audiochip}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Canaux</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${chan}</div>
    </td>
    </tr>
    
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >RESEAU</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ethernet RJ45</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${ether}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Wifi</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${wifi}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Bluetooth</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${blue}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >STOCKAGE</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ports SATA</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${sata}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ports M.2</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${m2}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Compatibilité RAID</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${raid}</div>
    </td>
    </tr>
    



    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px;" align="left">
    <h3 >SLOT D'EXTENSION</h3>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;" colspan="2"></td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">PCI-Ex 16x</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${pci1}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">PCI-Ex 8x</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${pci2}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">PCI-Ex 4x</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${pci3}</div>
    </td>
    </tr>
    

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">PCI-Ex 1x</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${pci4}</div>
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
    <div style="float: left; margin-top: 2px;">Panneau arrière</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${backpanel}</div>
    </td>
    </tr>
    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Ports USB</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${usb}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Connecteurs supplémentaires</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${consup}</div>
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
    <div style="float: left; margin-top: 2px;">Dimensions (L x l x H) en cm</div>
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
    <div style="float: left; margin-top: 2px;">LED</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${led}</div>
    </td>
    </tr>

    <tr >
    <td style="border-bottom: #E8E8E8 solid 1px; border-right: #E8E8E8 solid 1px; padding-left: 20px;">
    <div style="float: left; margin-top: 2px;">Format</div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: -14px; float: left; margin-top: 1px;"></div>
    </td>
    <td style="border-bottom: #E8E8E8 solid 1px;">
    <div style="margin-left: 20px; float: left; margin-top: 2px;">${format}</div>
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
    <p  style="text-align: center;"><span>Retrouvez nos cartes mères, disponible</span><span style="color: #fc8628;"><strong> <a href="${cat}" target="_blank" rel="noreferrer noopener"><span style="color: #fc8628;">ICI</span></a></strong></span></p>
    </div>`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(maintitle.value, firsttitle.value, firstdesc.value, secondtitle.value, seconddesc.value, thirdtitle.value, thirddesc.value, construct.value, cat.value, marque.value, reffab.value, modele.value, dimensions.value, couleur.value, compatcpu.value, socket.value, chipset.value, memtype.value, memfreq.value, duachan.value, slotcapac.value, maxcap.value, ecc.value, chipsetgint.value, memshare.value, audiochip.value, chan.value, ether.value, wifi.value, blue.value, sata.value, m2.value, raid.value, pci1.value, pci2.value, pci3.value, pci4.value, backpanel.value, usb.value, consup.value, led.value, format.value, garantie.value);
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

    compatcpu.value = "";
    socket.value = "";
    chipset.value = "";
    memtype.value = "";
    memfreq.value = "";
    duachan.value = "";
    slotcapac.value = "";
    maxcap.value = "";
    ecc.value = "";
    chipsetgint.value = "";
    memshare.value = "";
    audiochip.value = "";
    chan.value = "";
    ether.value = "";
    wifi.value = "";
    blue.value = "";
    sata.value = "";
    m2.value = "";
    raid.value = "";
    pci1.value = "";
    pci2.value = "";
    pci3.value = "";
    pci4.value = "";
    backpanel.value = "";
    usb.value = "";
    consup.value = "";
    led.value = "";
    format.value = "";

    dimensions.value = "";
    mats.value = "";
    garantie.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})
