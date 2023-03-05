function procesarRespuesta(){
    event.preventDefault();
    let pre1 = document.querySelector('input[name="p1"]:checked').value;
    let pre2 = document.querySelector('input[name="p2"]:checked').value;
    let pre3 = document.querySelector('input[name="p3"]:checked').value;
    let pre4 = document.querySelector('input[name="p4"]:checked').value;
    let pre5 = document.querySelector('input[name="p5"]:checked').value;

    const formulario = document.getElementById('formulario');

    //Condiciones para que dependiendo de las respuestas nos devuelva en que rol deberiamos jugar
    if(pre1 == "si" && pre2 == "si" && pre3 == "norte" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul1').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    } else if(pre1 == "si" && pre2 == "si" && pre3 == "norte" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    } else if(pre1 == "si" && pre2 == "si" && pre3 == "norte" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "sur" && pre4 == "si" && pre5 == "si"){
        document.getElementById('resul1').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "sur" && pre4 == "si" && pre5 == "no"){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "sur" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "sur" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "este" && pre4 == "si" && pre5 == "si"){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "este" && pre4 == "si" && pre5 == "no"){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "este" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "este" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "oeste" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "oeste" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "si" && pre3 == "oeste" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "norte" && pre4 == "si" && pre5 == "si"){
        document.getElementById('resul1').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "norte" && pre4 == "si" && pre5 == "no"){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "norte" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "norte" && pre4 == "no" && pre5 == "si"){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "norte" && pre4 == "no" && pre5 == "no"){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "sur" && pre4 == "si" && pre5 == "si"){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "sur" && pre4 == "si" && pre5 == "no"){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "sur" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "sur" && pre4 == "no" && pre5 == "si"){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "sur" && pre4 == "no" && pre5 == "no"){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "este" && pre4 == "si" && pre5 == "si"){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "este" && pre4 == "si" && pre5 == "no"){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "este" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "este" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "oeste" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "oeste" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "si" && pre2 == "no" && pre3 == "oeste" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "norte" && pre4 == "si" && pre5 == "si"){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "norte" && pre4 == "si" && pre5 == "no"){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "norte" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "norte" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "sur" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "sur" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "sur" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "este" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "este" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "este" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "oeste" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul4').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "oeste" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "si" && pre3 == "oeste" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "norte" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "norte" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "norte" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "este" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "este" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "este" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "oeste" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul2').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "oeste" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "oeste" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "sur" && pre4 == "si" && (pre5 == "si" || pre5 == "no")){
        document.getElementById('resul3').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "sur" && pre4 == "no" && (pre5 == "si" || pre5 == "no")){
            document.getElementById('resul3').style.display='block';
            document.getElementById('formulario').style.display='none';
            document.getElementById('ccimages2').style.display='none';
    }else if(pre1 == "no" && pre2 == "no" && pre3 == "sur" && (pre4 == "si" || pre4 == "no") && pre5 == "puede_ser"){
        document.getElementById('resul5').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('ccimages2').style.display='none';
    }
}
function mostrarPersonajes(){
    let dAstra = document.getElementById('lastra');
    let cAstra = document.getElementById('astra');
    let dBreach = document.getElementById('lbreach');
    let cBreach = document.getElementById('breach');
    let dBrim = document.getElementById('lbrim');
    let cBrim = document.getElementById('brimstone');
    let dChamber = document.getElementById('lchamber');
    let cChamber = document.getElementById('chamber');
    let dCypher = document.getElementById('lcypher');
    let cCypher = document.getElementById('cypher');
    let dFade = document.getElementById('lfade');
    let cFade = document.getElementById('fade');
    let dHarbor = document.getElementById('lharbor');
    let cHarbor = document.getElementById('harbor');
    let dJett = document.getElementById('ljett');
    let cJett = document.getElementById('jett');
    let dSage = document.getElementById('lsage');
    let cSage = document.getElementById('sage');
    let dSova = document.getElementById('lsova');
    let cSova = document.getElementById('sova');
    let dKayo = document.getElementById('lkayo');
    let cKayo = document.getElementById('kayo');
    let dKill = document.getElementById('lkill');
    let cKill = document.getElementById('killjoy');
    let dNeon = document.getElementById('lneon');
    let cNeon = document.getElementById('neon');
    let dOmen = document.getElementById('lomen');
    let cOmen = document.getElementById('omen');
    let dPhx = document.getElementById('lphx');
    let cPhx = document.getElementById('phoenix');
    let dRaze = document.getElementById('lraze');
    let cRaze = document.getElementById('raze');
    let dReyna = document.getElementById('lreyna');
    let cReyna = document.getElementById('reyna');
    let dSkye = document.getElementById('lskye');
    let cSkye = document.getElementById('skye');
    let dViper = document.getElementById('lviper');
    let cViper = document.getElementById('viper');
    let dYoru = document.getElementById('lyoru');
    let cYoru = document.getElementById('yoru');
    event.preventDefault();
    dAstra.addEventListener('click', function(event){
        document.getElementById('astra').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dBreach.addEventListener('click', function(event) {
        document.getElementById('breach').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dBrim.addEventListener('click', function(event) {
        document.getElementById('brimstone').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dChamber.addEventListener('click', function(event) {
        document.getElementById('chamber').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dCypher.addEventListener('click', function(event) {
        document.getElementById('cypher').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dFade.addEventListener('click', function(event) {
        document.getElementById('fade').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dHarbor.addEventListener('click', function(event) {
        document.getElementById('harbor').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dJett.addEventListener('click', function(event) {
        document.getElementById('jett').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dSage.addEventListener('click', function(event) {
        document.getElementById('sage').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dSova.addEventListener('click', function(event) {
        document.getElementById('sova').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dKayo.addEventListener('click', function(event) {
        document.getElementById('kayo').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dKill.addEventListener('click', function(event) {
        document.getElementById('killjoy').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dNeon.addEventListener('click', function(event) {
        document.getElementById('neon').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dOmen.addEventListener('click', function(event) {
        document.getElementById('omen').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dPhx.addEventListener('click', function(event) {
        document.getElementById('phoenix').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dRaze.addEventListener('click', function(event) {
        document.getElementById('raze').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dReyna.addEventListener('click', function(event) {
        document.getElementById('reyna').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dSkye.addEventListener('click', function(event) {
        document.getElementById('skye').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dViper.addEventListener('click', function(event) {
        document.getElementById('viper').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    dYoru.addEventListener('click', function(event) {
        document.getElementById('yoru').style.display = 'grid';
        document.getElementById('content').style.display = 'none';
        document.getElementById('ccimages').style.display='none';
    });
    }
    function mostrarMapas(){
        let dAscent = document.getElementById('lascent');
        let cAscent = document.getElementById('ascent');
        let dBind = document.getElementById('lbind');
        let cBind = document.getElementById('bind');
        let dSplit = document.getElementById('lsplit');
        let cSplit = document.getElementById('split');
        let dHaven = document.getElementById('lhaven');
        let cHaven = document.getElementById('haven');
        let dBreeze = document.getElementById('lbreeze');
        let cBreeze = document.getElementById('breeze');
        let dIcebox = document.getElementById('licebox');
        let cIcebox = document.getElementById('icebox');
        let dFracture = document.getElementById('lfracture');
        let cFracture = document.getElementById('fracture');
        let dPearl = document.getElementById('lpearl');
        let cPearl = document.getElementById('pearl');
        let dLotus = document.getElementById('llotus');
        let cLotus = document.getElementById('lotus');
        event.preventDefault();
        dAscent.addEventListener('click', function(event) {
            document.getElementById('ascent').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dBind.addEventListener('click', function(event) {
            document.getElementById('bind').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dSplit.addEventListener('click', function(event) {
            document.getElementById('split').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dHaven.addEventListener('click', function(event) {
            document.getElementById('haven').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dBreeze.addEventListener('click', function(event) {
            document.getElementById('breeze').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dIcebox.addEventListener('click', function(event) {
            document.getElementById('icebox').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dFracture.addEventListener('click', function(event) {
            document.getElementById('fracture').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dPearl.addEventListener('click', function(event) {
            document.getElementById('pearl').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
        dLotus.addEventListener('click', function(event) {
            document.getElementById('lotus').style.display = 'block';
            document.getElementById('contenido-map').style.display = 'none';
            document.getElementById('ccimages2').style.display='none';
        });
    }