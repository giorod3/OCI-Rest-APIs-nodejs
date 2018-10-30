var fs = require( 'fs' );
var oci = require( './oci' );
var https = require('https');

//
// default callback function
//
var o = '';
var callback = function(data) { console.log(data) };

var auth={
  tenancyId : 'ocid1.tenancy.oc1..aaaaaaaag2lewgpfx45exrgreh6ggn6yy5u3ceux6znsdiepplndtmmqonnq',
  userId : 'ocid1.user.oc1..aaaaaaaayzac5nk42n7klwgzzzatyy2vm45v7zc2l4vzwucjmoiymjtpvhka',
  keyFingerprint : 'd0:77:11:66:7b:a8:90:c0:ef:c7:5c:79:9d:c6:f4:24',
  RESTversion : '/20160918',
  region: 'us-ashburn-1'
};
auth.privateKey = fs.readFileSync('/Users/clbeck/.oci/oci_api_key.pem', 'ascii');

//
// set up parameters object
//
var parameters = {
compartmentId : 'ocid1.compartment.oc1..aaaaaaaapfevjgs2bylnodtw7oojzrvyonna2e4vkkddzbos4zyxhr7jizka',
autonomousDataWarehouseId : 'ocid1.autonomousdwdatabase.oc1.iad.abuwcljsq5hq7lx7x4oza3jc2vqijp3vo47aiygyl4zpc62a2z42foy2htna',
body : { 'password': 'P0k3rCh1pR4ck' }
};
oci.database.autonomousDataWarehouse.list( auth, parameters, callback );

oci.database.autonomousDataWarehouse.generateWallet( auth, parameters, function(resp){
  var file = fs.createWriteStream('/Users/clbeck/Desktop/file.zip');
  resp.pipe(file);
} );

parameters = {
  namespaceName:'gse00014467',
  bucketName:'chris_bucket',
  objectName: 'scrown.jpg'
}

oci.objectStore.obj.get( auth, parameters, function(resp){
  var buf = Buffer.from(resp, 'utf8');
  fs.writeFile('/Users/clbeck/Desktop/file.jpg', buf, 'binary' , function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
  });
});
