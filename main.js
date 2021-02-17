fetch("./data.json")
    .then(response => {
        // console.log('Response=> ', response.json());
        return response.json();
    })
    .then(result => {
        console.log(result);
        append(result);
    });

// const data = {"Employees":[{"userId":"one","jobTitleName":"Developer","firstName":"Raj","lastName":"Chaudhary"},{"userId":"two","jobTitleName":"Developer","firstName":"Sagar","lastName":"Shrestha"}],"Employer":[{"userId":"one","jobTitleName":"Manager","firstName":"Ashok","lastName":"Ganika"},{"userId":"two","jobTitleName":"Officer","firstName":"Nabin","lastName":"Shahi"}]}
// const check = JSON.stringify(data)

// console.log('Data=> ', data); //!! DATA FETCHED

const mainContainer = document.getElementById("myData");
const tbody = document.getElementById('tbody')
const append = (result) => {

    // console.log(result.Employee.length);

    class Employee {

        constructor(params) {
                this.userId = params.userId,
                this.jobTitleName = params.jobTitleName,
                this.firstName = params.firstName,
                this.lastName = params.lastName
        }

        displayData() {
            let tr = document.createElement("tr");
            tr.innerHTML = `
                        <th scope="row">${this.userId} </th>
                        <td>${this.firstName} </td>
                        <td>${this.lastName} </td>
                        <td>${this.jobTitleName} </td>
                    `
            tbody.appendChild(tr)
            // mainContainer.appendChild(tbody);
        }
    }


    class NewEmployee extends Employee {
        constructor(params) {
            super(params);
        }

        func() {

        }
    }

    empeBtn = document.getElementById('employeeBtn');
    emprBtn = document.getElementById('employerBtn');

    const empty = () => {
        tbody.innerHTML = ''
    }

    empeBtn.addEventListener('click', () => {
        empty();
        for (i = 0; i < result.Employee.length; i++) {
            const employee1 = new NewEmployee(result.Employee[i]);
            employee1.displayData()
        }
        
        console.log('Click');
    })

    emprBtn.addEventListener('click', () => {
        empty();
        for (i = 0; i < result.Employers.length; i++) {
            const employee1 = new NewEmployee(result.Employers[i]);
            employee1.displayData()
        }
        
        console.log('Click');
    })
}