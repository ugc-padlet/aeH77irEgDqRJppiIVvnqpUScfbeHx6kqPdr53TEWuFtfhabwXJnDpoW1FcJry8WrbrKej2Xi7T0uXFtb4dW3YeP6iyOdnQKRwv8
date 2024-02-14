document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const answers = {
        question1: 'maru',
        question2: 'maru',
        question3: 'maru',
        question4: 'maru',
        question5: 'maru',
    };

    let score = 0;

    for (let i = 1; i <= 5; i++) {
        const questionName = 'question' + i;
        const selectedAnswer = document.querySelector('input[name="' + questionName + '"]:checked');

        if (selectedAnswer) {
            if (selectedAnswer.value === answers[questionName]) {
                score++;
            }
        }
    }

    alert('あなたの正解した問題は ' + score + '/5 です。');
});

window.addEventListener('scroll', () => {
    const pageTop = document.getElementById('page-top'); //トップに戻るボタンのidを取得
    if (window.pageYOffset >= 400) {  //上から400px以上スクロールしたら
        pageTop.classList.add('fadein'); //aタグにfadeinクラスを与える
    } else {
        pageTop.classList.remove('fadein');//aタグからfadeinクラスをはずす
    }
});