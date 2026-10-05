let encryptedData;
let privateKey;
let publicKey;

function encryptData() {

    let fullname = document.getElementById("fullname").value;
    let dob = document.getElementById("dob").value;
    let yearlevel = document.getElementById("yearlevel").value;
    let gender = document.getElementById("gender").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let keySize = document.getElementById("keySize").value;

    
    let rsa = new JSEncrypt({
        default_key_size: keySize
    });

    rsa.getKey();

    publicKey = rsa.getPublicKey();
    privateKey = rsa.getPrivateKey();

    
    let data = "Name: " + fullname +
        " DOB: " + dob +
        " Year: " + yearlevel +
        " Gender: " + gender +
        " Username: " + username +
        " Password: " + password;

    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    encryptedData = encrypt.encrypt(data);
    document.getElementById("encrypted").value = encryptedData;
    document.getElementById("message").innerHTML =
        "Encryption Successful!";
}

function decryptData() {
    if (encryptedData == null) {
        document.getElementById("message").innerHTML =
            "Please encrypt first.";
        return;
    }

    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    let result = decrypt.decrypt(encryptedData);
    document.getElementById("decrypted").value = result;
    document.getElementById("message").innerHTML =
        "Decryption Successful!";
}