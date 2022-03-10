let loopPat = document.getElementById('loop-pat');
let loopSamun = document.getElementById('loop-samun');

let result_button = document.getElementById('result-button');
let result = document.getElementById('result');

const loopMePat = () => {
    let output_pat = '';

    for (let i = 1; i < 8; i++) {
        output_pat += `<label>PAT${i}</label><div class="row"><div class="col-md-6"><input type="number" class="form-control" id="pat${i}-score" name="pat${i}-score" placeholder="คะแนน PAT (300)" max="300" step="1"></div><div class="col-md-6"><input type="number" class="form-control" id="pat${i}-percent" name="pat${i}-percent"placeholder="เปอร์เซ็นที่มหาลัยกำหนด" max="100" step="1"></div></div>`;
        console.log(`loading pat${i}`);
    }
    loopPat.innerHTML = output_pat;
}

const loopMeSamun = () => {
    let output_samun = '';
    let subject = ['คณิตศาสตร์ 1', 'คณิตศาสตร์ 2', 'วิทยาศาสตร์', 'ฟิสิกส์', 'เคมี', 'ชีววิทยา', 'ไทย', 'สังคม', 'อังกฤษ',]
    for (let i = 1; i < 10; i++) {
        output_samun += `<label>9 วิชาสามัญ (${subject[i-1]})</label><div class="row"><div class="col-md-6"><input type="number" class="form-control" id="samun${i}-score" name="samun${i}-score" placeholder="คะแนน 9 วิชาสามัญ (100)" max="100" step="1"></div><div class="col-md-6"><input type="number" class="form-control" id="samun${i}-percent" name="samun${i}-percent"placeholder="เปอร์เซ็นที่มหาลัยกำหนด" max="100" step="1"></div></div>`;
        console.log(`loading samun${i}`);
    }
    loopSamun.innerHTML = output_samun;
}

const calculate = () => {
    let a_result = 0;
    let gpax_score = Number(document.getElementById(`gpax-score`).value);
    let gpax_percent = Number(document.getElementById(`gpax-percent`).value)*75;
    a_result += gpax_score * gpax_percent;

    let gat_score = Number(document.getElementById(`gat-score`).value);
    let gat_percent = Number(document.getElementById(`gat-percent`).value);
    a_result += gat_score * gat_percent;


    for (let i = 1; i < 8; i++) {
        let pat_score = Number(document.getElementById(`pat${i}-score`).value);
        let pat_percent = Number(document.getElementById(`pat${i}-percent`).value)*1;
        a_result += (pat_score * pat_percent);
    }

    for (let i = 1; i < 10; i++) {
        let samun_score = Number(document.getElementById(`samun${i}-score`).value);
        let samun_percent = Number(document.getElementById(`samun${i}-percent`).value)*3;
        a_result += (samun_score * samun_percent);
    }
    //result.innerHTML = a_result;
    alert(Math.ceil(a_result));
}

const loadAll = () => {
    loopMePat();
    loopMeSamun();
}

window.onload = loadAll;
result_button.addEventListener('click', calculate);