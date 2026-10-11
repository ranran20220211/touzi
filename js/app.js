// Bennett Alpha OS
// App Engine V0.3.2


console.log("加载决策系统");


// ========================
// 1. 市场基础状态
// ========================

const state = {

    macro_score:10,

    market_score:82

};


// ========================
// 2. 生成今日决策
// ========================

const todayDecision = generateDecision(state);



console.log(
    "Bennett Alpha OS 今日作战命令",
    todayDecision
);



// ========================
// 3. 更新 Dashboard
// ========================

updateDashboard(todayDecision);




// ========================
// 4. 宏观评分
// ========================


calculateMacroScore()

.then(result=>{


    console.log(
        "Macro Engine:",
        result
    );


    const macro =
    document.getElementById("macroScore");


    if(macro){

        macro.innerHTML =
        result.score + "/" + result.maxScore;

    }


    const macroStatus =
    document.getElementById("macroStatus");


    if(macroStatus){


        if(result.score>=10){

            macroStatus.innerHTML =
            "流动性改善";


        }else{

            macroStatus.innerHTML =
            "流动性偏弱";

        }


    }


});
