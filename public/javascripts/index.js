"use strict";
const btnShow = document.getElementById("display");
const tableBody = document.getElementById("table-body");
btnShow.addEventListener("click", () => {
    btnShow.setAttribute("disabled", "true");
    const toServer = new XMLHttpRequest();
    toServer.open("POST", "/api/show", true);
    toServer.onreadystatechange = () => {
        if (toServer.readyState === 4) {
            displayTable(tableBody, JSON.parse(toServer.response).connections);
        }
    };
    toServer.send();
});
function displayTable(tableBody, response) {
    response.forEach(connection => {
        const tdHostname = document.createElement("td");
        tdHostname.textContent = connection.hostname;
        const tdProtocol = document.createElement("td");
        tdProtocol.textContent = connection.protocol;
        const tdMethod = document.createElement("td");
        tdMethod.textContent = connection.method;
        const tdDate = document.createElement("td");
        tdDate.textContent = new Date(connection.date).toISOString();
        const tr = document.createElement("tr");
        tr.append(tdHostname, tdProtocol, tdMethod, tdDate);
        tableBody.append(tr);
    });
}
