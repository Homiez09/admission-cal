let result_button = document.getElementById('result-button');

var url_string = window.location;
var url = new URL(url_string);
var data = url.searchParams.get("data");
var dataArray = data.split(',');
console.log(data);
console.log(dataArray);

if (data == "") {
    alert("กรุณาเลือกวิชาที่ต้องการคำนวณ");
    window.location.href = "index.html"
}

const step = [0.01, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
const max = [4, 300, 300, 300, 300, 300, 300, 300, 300, 100, 100, 100, 100, 100, 100, 100, 100, 100]
const id = ['gpax', 'gat', 'pat1', 'pat2', 'pat3', 'pat4', 'pat5', 'pat6', 'pat7', 'samun1', 'samun2', 'samun3', 'samun4', 'samun5', 'samun6', 'samun7', 'samun8', 'samun9'];
const score = ['gpaxs', 'gats', 'pat1s', 'pat2s', 'pat3s', 'pat4s', 'pat5s', 'pat6s', 'pat7s', 'samun1s', 'samun2s', 'samun3s', 'samun4s', 'samun5s', 'samun6s', 'samun7s', 'samun8s', 'samun9s'];
const percent = ['gpaxp', 'gatp', 'pat1p', 'pat2p', 'pat3p', 'pat4p', 'pat5p', 'pat6p', 'pat7p', 'samun1p', 'samun2p', 'samun3p', 'samun4p', 'samun5p', 'samun6p', 'samun7p', 'samun8p', 'samun9p'];
const name = ['GPAX', 'GAT', 'PAT1', 'PAT2', 'PAT3', 'PAT4', 'PAT5', 'PAT6', 'PAT7', '9 วิชาสามัญ (คณิตศาสตร์ 1)', '9 วิชาสามัญ (คณิตศาสตร์ 2)', '9 วิชาสามัญ (วิทยาศาสตร์)', '9 วิชาสามัญ (ฟิสิกส์)', '9 วิชาสามัญ (เคมี)', '9 วิชาสามัญ (ชีววิทยา)', '9 วิชาสามัญ (ไทย)', '9 วิชาสามัญ (สังคม)', '9 วิชาสามัญ (อังกฤษ)']
const x = [75,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3]

const loadItem = () => {
    let output = []
    for (let i = 0; i < 18; i++) {
        if (dataArray.includes(id[i])) {
            output += `<label style="margin-top:1rem;">${name[i]}</label><div class="row"><div class="col-md-6"><input type="number" class="form-control" id=${score[i]} name=${score[i]} placeholder="คะแนน ${name[i]}" max="${max[i]}" step="${step[i]}"></div><div class="col-md-6"><input type="number" class="form-control" id=${percent[i]} name=${percent[i]} placeholder="เปอร์เซ็นที่มหาลัยกำหนด" max="100" step="1"></div></div>`;
        }
    }
    loadData.innerHTML = output;
}

const getCheckedCheckboxesFor = (checkboxName) => {
    var checkboxes = document.querySelectorAll(`input[name="${checkboxName}"]:checked`), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    window.location.href = "cal.html?data=" + values;
}

const calculate = () => {
    let a_result = 0;
    for (let i = 0; i < 18; i++) {
        if (dataArray.includes(id[i])){
            console.log(i);
            let scorex = Number(document.getElementById(`${score[i]}`).value);
            let percentx = Number(document.getElementById(`${percent[i]}`).value) * x[i];
            a_result += (scorex * percentx);
        }
    }
    alert(`${Intl.NumberFormat().format(Math.ceil(a_result))} | 30,000 คะแนน`);
}

window.onload = loadItem;
result_button.addEventListener('click', calculate);