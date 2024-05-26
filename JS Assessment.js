/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arr=[];
/* this function will take in some values as parameters, create an
NFT object using the parameters passed to it for its metadata, 
and store it in the variable above.*/
function mintNFT (name,age,shirttype,bling) {
    const nft={
        'name':name,
        'age':age,
        'shirttype':shirttype,
        'bling':bling,
    }
    arr.push(nft)
    console.log("minted"+ name);
    
}
/*create a "loop" that will go through an "array" of NFT's
and print their metadata with console.log()*/
function listofNFTs () {
    for(y=0;y<arr.length;y++){
        console.log('\n')
        console.log('name:'+arr[y].name);
        console.log('age:'+arr[y].age);
        console.log('shirttype:'+arr[y].shirttype);
        console.log('bling:'+arr[y].bling);
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log('\ntotalNFTs:'+arr.length);
}
// call your functions below this line
mintNFT('Ayushi','20','sweatshirt','gold');
mintNFT('Rohan','22','sweatshirt','emerald');
mintNFT('Tanya','17','sweatshirt','diamond');
mintNFT('Yash','26','sweatshirt','ruby');

listofNFTs();
getTotalSupply();
