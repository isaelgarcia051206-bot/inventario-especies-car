var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Mapadeespecies_1 = new ol.format.GeoJSON();
var features_Mapadeespecies_1 = format_Mapadeespecies_1.readFeatures(json_Mapadeespecies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadeespecies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadeespecies_1.addFeatures(features_Mapadeespecies_1);
var lyr_Mapadeespecies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadeespecies_1, 
                style: style_Mapadeespecies_1,
                popuplayertitle: 'Mapa de especies',
                interactive: true,
    title: 'Mapa de especies<br />\
    <img src="styles/legend/Mapadeespecies_1_0.png" /> casuarinas<br />\
    <img src="styles/legend/Mapadeespecies_1_1.png" /> Ciprés<br />\
    <img src="styles/legend/Mapadeespecies_1_2.png" /> Fresno<br />\
    <img src="styles/legend/Mapadeespecies_1_3.png" /> Jacaranda<br />\
    <img src="styles/legend/Mapadeespecies_1_4.png" /> Pinos<br />\
    <img src="styles/legend/Mapadeespecies_1_5.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Mapadeespecies_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Mapadeespecies_1];
lyr_Mapadeespecies_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_Mapadeespecies_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_Mapadeespecies_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Mapadeespecies_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});