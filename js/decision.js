// Bennett Alpha OS
// Decision Engine V0.3.2


const decisionRules = {

    rules: [

        {
            id: "D001",
            priority: 1,
            name: "积极交易",

            conditions: {

                macro_score_min: 10,
                market_score_min: 80

            },

output:{

permission:"允许交易",

position:"60%-70%",

risk:"中风险",

strategy:"寻找趋势机会",

warning:"禁止追涨",

summary:
"市场处于震荡偏强阶段，允许寻找趋势机会，但禁止追涨。"

}

        },


        {
            id: "D002",
            priority: 2,
            name: "谨慎观察",

            conditions: {

                macro_score_min: 6,
                market_score_min: 70

            },

            output: {

                permission: "谨慎交易",
                position: "30%-40%",
                strategy: "等待确认",
                warning: "控制仓位"

            }

        },


        {
            id: "D003",
            priority: 3,
            name: "风险保护",

            conditions: {

                macro_score_min: 0,
                market_score_min: 0

            },

            output: {

                permission: "暂停交易",
                position: "0%-20%",
                strategy: "保护本金",
                warning: "避免情绪交易"

            }

        }

    ]

};



// ==========================
// Decision Engine
// ==========================


function generateDecision(state){


    let result = null;


    // 按优先级排序

    decisionRules.rules.sort(
        (a,b)=>a.priority-b.priority
    );



    for(let rule of decisionRules.rules){


        if(

            state.macro_score >= rule.conditions.macro_score_min

            &&

            state.market_score >= rule.conditions.market_score_min

        ){

            result = rule.output;

            break;

        }


    }


    return result;


}



// 测试

const testState = {

    macro_score:10,

    market_score:85

};


console.log(
    "Bennett Alpha OS 今日作战命令"
);


console.log(
    generateDecision(testState)
);