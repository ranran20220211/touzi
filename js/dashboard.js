// Bennett Alpha OS
// Dashboard Engine V0.3.2



function updateDashboard(decision){



    console.log(
        "Dashboard更新",
        decision
    );



    // =====================
    // 是否允许交易
    // =====================

    const permission =
    document.getElementById("permission");


    if(permission){

        permission.innerHTML =
        decision.permission;

    }



    // =====================
    // 建议仓位
    // =====================

    const position =
    document.getElementById("position");


    if(position){

        position.innerHTML =
        decision.position;

    }




    // =====================
    // 风险等级
    // =====================

    const risk =
    document.getElementById("risk");


    if(risk){

        risk.innerHTML =
        decision.risk;

    }
// =====================
// 今日一句话
// =====================


const summary =
document.getElementById("summary");


if(summary){

    summary.innerHTML =
    decision.summary;

}



    // =====================
    // 交易策略
    // =====================

    const strategy =
    document.getElementById("strategy");


    if(strategy){

        strategy.innerHTML =
        decision.strategy;

    }





    // =====================
    // 风险提示
    // =====================

    const warning =
    document.getElementById("warning");


    if(warning){

        warning.innerHTML =
        decision.warning;

    }



}
