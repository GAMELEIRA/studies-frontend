const calculateStudentsRevenue = (ticketsStudentsSold, valueTicketsCommon) => ticketsStudentsSold * valueTicketsCommon / 2;

const calculateCommonRevenue = (ticketsStudentsSold, valueTicketsCommon) => ticketsStudentsSold * valueTicketsCommon;

const calculateRevenueTotal = (studentsRevenue, commonRevenue) => studentsRevenue + commonRevenue;

const showMessage = (revenue) => {
    alert(`A arrecadação foi de R$ ${revenue}`);
}

const calculateRevenue = () => {
    const ticketsStudentsSold = Number(document.getElementById('tickets-students-sold').value);
    const ticketsCommonSold = Number(document.getElementById('tickets-common-sold').value);
    const valueTicketsCommon = Number(document.getElementById('value-tickets-common').value);
    const commonRevenue = calculateCommonRevenue(ticketsStudentsSold, ticketsCommonSold);
    const studentsRevenue = calculateStudentsRevenue(ticketsCommonSold, valueTicketsCommon);
    const totalRevenue = calculateRevenueTotal(studentsRevenue, commonRevenue);
    showMessage(totalRevenue);
}