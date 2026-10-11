// Bennett Alpha OS
// Macro Engine V0.2


async function loadMacroData(){


    const response = await fetch(
        "data/macro_test_rule.json"
    );


    const data = await response.json();


    return data;

}





async function calculateMacroScore(){


    const macro = await loadMacroData();


    let totalScore = 0;


    macro.rules.forEach(rule=>{


        totalScore += rule.score;


    });



    return {

        module: macro.macro_module,

        score: totalScore,

        maxScore: macro.rules.length * 5,

        rules: macro.rules

    };


}




calculateMacroScore()
.then(result=>{


    console.log(
        "Macro Engine:",
        result
    );


});