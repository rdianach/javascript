
const company = "Programmer Zaman Now";

function sum(first, second){
    return first + second;
}

class Company{

}

// alias export tidak direkomen, 
//export {company as perusahaan, sum as total, Company as Perusahaan}

// alias export tidak direkomen, 
export {company, sum, Company}

