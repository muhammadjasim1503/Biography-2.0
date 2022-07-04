// Populating table of academics
let academics = {school: ['Comsats University Islamabad Wah Campus',
                            'Islamia College Peshawar',
                            'Al-asar Academy UTZP'],

                completedIn: ['2024',
                            '2020',
                            '2018']
                };

for (let i = 0; i<academics.school.length; i++){
    document.getElementById('tab').innerHTML += 
    `<tr>
        <td>` + academics.school[i] + `</td>
        <td>` + academics.completedIn[i] + `</td>
    </tr>`;
}