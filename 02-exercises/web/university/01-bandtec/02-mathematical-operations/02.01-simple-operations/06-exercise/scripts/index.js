const calculateKi = (normalKi, force) => normalKi * force;  

const showKi = () => {
    const nameWarrior = document.getElementById('name-warrior').value;
    const normalKi = document.getElementById('ki-normal').value;
    const superSayajin = calculateKi(normalKi, 50);
    const superSayajin2 = calculateKi(normalKi, 100);

    alert(`O Super Sayajin ${nameWarrior} têm o ki ${superSayajin}`);
    alert(`O Super Sayajin 2 ${nameWarrior} têm o ki ${superSayajin2}`);
}